---
# try also 'default' to start simple
theme: seriph
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## 这款软件代码主要功能都完成了, 就差了一点点细节, 主要概括这个项目就是, 简单的权限系统和文件上传，以及主要用地理信息系统开发的地图上的线索共享系统，外加腾讯系的字幕自动生成功能，简直就是一缝合怪

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

# 字幕编辑器与自动生成

这款软件代码主要功能都完成了, 就差了一点点细节, 主要概括这个项目就是, 简单的权限系统和文件上传，以及主要用地理信息系统开发的地图上的线索共享系统，外加腾讯系的字幕自动生成功能，简直就是一缝合怪

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    开始 <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--

-->

---
layout: quote
---
# 开始之前

之前的视频做的比较糙 学习新的视频制作方式

- 主题不明确
- 讲话线索比较乱
- 声音比较粗糙
<!--

-->
---
layout: center
---
# 进入正题
<!--

-->

---
layout: image
image: /index.png
---
# 字幕转译是什么?

字幕转译是一个为开发者设计的自动为视频上字幕前后端网页应用

<!--

-->
---
layout: default
---
# 目前的解决方案

主流的都是商业收费与限制的免费APP, 但也有开源的需要配置

- 📝 **科大讯飞** - 便宜, 大多数都在用
- 🎨 **各大云厂商(腾讯云)** - 简单, 功能多但收费比较贵
- 🧑‍💻 **剪映APP等等** - 免费, 但只能在APP中使用
- 🤹 **video-srt** - windows与命令行兼容, 阿里云API识别的开源工具, 比较麻烦
- 🤹 **vsnc-srt** - 命令行兼容各平台, 腾讯云(阿里云)API识别的开源工具, 比较麻烦
<!--

-->
---
layout: default
---
# 收费对比(列举几个)


- 腾讯云商业版 https://transfy.cloud.tencent.com/#/account 每分钟 0.56元 ~ 0.433元 5分钟视频2.1元

- 科大讯飞 https://zimu.iflyrec.com/productList/index.html  每分钟 0.426元 ~ 0.34元 5分钟视频1.7元

- 开源工具使用API方案 大致基本不用花费, 其中:
  - 语音识别 https://cloud.tencent.com/product/asr/pricing
  
  - 录音文件识别免费额度每月10小时 (可以做120个5分钟视频)

  - 对象存储（Cloud Object Storage，COS）的计费 https://cloud.tencent.com/document/product/436/16871#.E4.BA.A7.E5.93.81.E5.AE.9A.E4.BB.B7

---
layout: image
image: /UI-Compare.png
---
# 字幕转译工具UI
<style>
h1 {
  text-align: right;
  background-color: #FFFFFF;
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: default
---
# 如何安装

1. [项目源代码](https://github.com/Lanseria/i-share-clue)
1. 下载 `ffmpeg` 可执行文件并加入到路径
1. [安装Docker,等软件安装具体步骤文档](https://github.com/Lanseria/i-share-clue#readme)

---
layout: center
---
# 如何使用