---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /1.jpg
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

# 为视频自动生成字幕

为 Nodejs 开发者设计，当然普通人也可以使用

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    现在开始 <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/Lanseria/slidev-demo" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# 这款软件能带来什么?

VSNC (video-srt-node-cli) 利用 nodejs 开发的 video srt 文件生成工具

- 📝 **基本不收费** - 你需求在阿里云上注册开发者账号
- 🎨 **可开发的** - 开源代码，你可以随时添加新的功能
- 🧑 **可自定义导出格式（未做）**
- 🤹 **可翻译国内外视频（未做）**
- 🎥 **顺便将字幕一键合成（未做）**

<br>
<br>

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: image-right
image: video-srt-windows.png

---

# 参考 video-srt 与 video-srt-windows

如果你需要更加稳定和丰富的功能，或者你是 go 开发者，可以直接使用这款的工具[^1]


> windows 推荐
(video-srt-windows)[https://github.com/wxbool/video-srt-windows]

<br>

> 其他系统推荐
(video-srt)[https://github.com/wxbool/video-srt]


[^1]: [windows 最新版可能你找不到，点击这里可以下载](/videosrt.exe)

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---

# FFMPEG 视频处理工具

<div grid="~ cols-2 gap-4">
<div>

不管你使用哪个，最好还是自己先安装好 ffmpeg 视频处理工具

你可以去官网下载对应的可执行文件，放在对应的文件夹里，或者使用路径放置在全局中

```sh
ffmpeg.exe
# 可以不下
# ffplay.exe
# ffprobe.exe
```

或者点击这里下载我提供的 [下载 FFMPEG ](/ffmpeg.7z)

</div>
<div>


<iframe width="200%" height="200%" src="https://cn.bing.com/search?q=ffmpeg&cvid=ad95e40a10014b48a27ab958e52c217d&aqs=edge..69i57.2548j0j1&pglt=163&FORM=ANNTA1&PC=U531" />

</div>
</div>

<style>
iframe {
  transform-origin: left top;
  transform: scale(0.5, 0.5);
}
</style>

---

# 看看效果

<video style=" height: 400px;" src="/cut.mp4" controls />

---
## preload: false
# Animations

---
# 去阿里云找配置

拿到相应的 `Appkey` `AccessKey ID` `AccessKey Secret` 

> [基本 access 地址](https://ram.console.aliyun.com/manage/ak) 

<br>

> [智能语音交互地址](https://nls-portal.console.aliyun.com/applist) 

<br>

> [OSS配置 bucket](https://oss.console.aliyun.com/overview)

---
layout: center
class: text-center
---

# 实机演示



---
layout: center
class: text-center
---

# Learn More

[Documentations](https://github.com/Lanseria/video-srt-node-cli) · [GitHub](https://github.com/Lanseria/video-srt-node-cli) · [Showcases](https://github.com/search?q=viedeo-srt)
