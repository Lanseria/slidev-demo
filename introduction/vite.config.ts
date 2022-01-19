import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    include: [
      "echarts/core",
      "echarts/renderers",
      "echarts/charts",
      "echarts/components",
      "vue-echarts"
    ],
  },
});
