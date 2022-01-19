<template>
  <v-chart ref="barRefs" class="chart" :theme="isDark ? 'dark' : null" :option="option" />
</template>
<script lang="ts">
import { isDark } from '@slidev/client/logic/dark'
import {
  defineComponent,
  ref,
  onMounted,
  onUnmounted,
  getCurrentInstance,
} from "vue";
import { registerTheme, use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import dark from "./dark.json";
use([
  CanvasRenderer,
  BarChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
]);
registerTheme('dark', dark)
export default defineComponent({
  components: {
    VChart,
  },
  setup() {
    const app = getCurrentInstance();
    const colors = ["#91CC75", "#EE6666"];
    const labels = ["人数/人", "百分比/%"];
    const barRefs = ref();
    let actionTimer = null;
    const option = ref({
      color: colors,
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      grid: {
        right: "5%",
        top: "15%",
        bottom: "10%",
        left: "5%",
      },
      legend: {
        data: labels,
      },
      xAxis: [
        {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          // prettier-ignore
          data: ['[0,6]', '(6,12]', '(12,14]', '(18,60]', '(60,70]', '(70,80]', '80+', '未知'],
          axisLabel: {
            interval: 0,
          },
        },
      ],
      yAxis: [
        {
          show: true,
          type: "value",
          min: 0,
          max: 250,
          position: "right",
          offset: 80,
          axisLine: {
            show: false,
            lineStyle: {
              color: colors[0],
            },
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: true,
            interval: 1,
            lineStyle: {
              color: "#E5EDF7",
              width: 3,
              type: "dashed",
              dashOffset: 5,
            },
          },
        },
        {
          show: true,
          type: "value",
          min: 0,
          max: 25,
          position: "left",
          axisLine: {
            show: false,
            lineStyle: {
              color: colors[1],
            },
          },
          axisLabel: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: labels[0],
          type: "bar",
          yAxisIndex: 0,
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2],
          itemStyle: {
            borderRadius: 10,
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#6CD6C5", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#5FA9EF", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
          showBackground: true,
          backgroundStyle: {
            borderRadius: 10,
            color: "#E5EDF7",
          },
          barWidth: 12,
        },
        {
          name: labels[1],
          type: "line",
          yAxisIndex: 1,
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#FFD02F", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#F1715A", // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4],
        },
      ],
    });
    const startActions = () => {
      let dataIndex = -1;
      const pie = barRefs.value;
      if (!pie) {
        return;
      }
      const dataLen = pie.option.series[0].data.length - 1;
      // console.log(pie.option.series[0].data);
      actionTimer = setInterval(() => {
        pie.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex,
        });
        dataIndex = (dataIndex + 1) % dataLen;
        // console.log(dataIndex);
        pie.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex,
        });
        // 显示 tooltip
        pie.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex,
        });
      }, 3000);
    };
    onMounted(() => {
      startActions();
      console.log(app.appContext.config.globalProperties.$slidev);
    });
    onUnmounted(() => {
      clearInterval(actionTimer);
    });
    return {
      barRefs,
      option,
      isDark
    };
  },
});
</script>

<style lang="css" scoped>
</style>
