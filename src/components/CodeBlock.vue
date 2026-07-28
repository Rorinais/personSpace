<!-- 代码块展示组件（语法高亮） -->
<script setup>
import { ref, computed } from 'vue'
import 'highlight.js/styles/github.css'
import hljs from 'highlight.js/lib/core'
import cpp from 'highlight.js/lib/languages/cpp'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'  // HTML
import css from 'highlight.js/lib/languages/css'
import python from 'highlight.js/lib/languages/python'
import json from 'highlight.js/lib/languages/json'
import bash from 'highlight.js/lib/languages/bash'
import glsl from 'highlight.js/lib/languages/c'  // GLSL 类似 C
import cmake from 'highlight.js/lib/languages/cmake'
import markdown from 'highlight.js/lib/languages/markdown'

hljs.registerLanguage('cpp', cpp)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('css', css)
hljs.registerLanguage('python', python)
hljs.registerLanguage('json', json)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('glsl', glsl)
hljs.registerLanguage('cmake', cmake)
hljs.registerLanguage('c', cpp)
hljs.registerLanguage('markdown', markdown)

const props = defineProps({
  code: String,
  lang: String,
})

const copied = ref(false)
const highlighted = computed(() => {
  if (props.lang && hljs.getLanguage(props.lang)) {
    return hljs.highlight(props.code, { language: props.lang }).value
  }
  // 未注册语言：纯转义显示
  return props.code.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
})

function copy() {
  navigator.clipboard.writeText(props.code).then(() => {
    copied.value = true
    setTimeout(() => copied.value = false, 1500)
  })
}
</script>

<template>
  <div class="code-block">
    <div class="code-head">
      <span class="code-lang" v-if="lang">{{ lang }}</span>
      <span v-else></span>
      <button class="copy-btn" @click="copy">{{ copied ? '已复制' : '复制' }}</button>
    </div>
    <pre><code v-html="highlighted"></code></pre>
  </div>
</template>

<style scoped>
.code-block {
  margin: 18px 0;
  border-radius: 8px;
  overflow: hidden;
  background: #f6f8fa;
  border: 1px solid #d0d7de;
}
.code-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 16px;
  font-size: 0.75rem;
  color: #656d76;
  background: #f6f8fa;
  border-bottom: 1px solid #d0d7de;
}
.code-lang { font-weight: 600; }
.copy-btn {
  background: none; border: 1px solid #d0d7de;
  color: #656d76; font-size: 0.72rem; cursor: pointer;
  padding: 2px 10px; border-radius: 5px;
  transition: 0.15s;
}
.copy-btn:hover { background: #eaeef2; }
pre {
  margin: 0;
  padding: 16px 20px;
  overflow-x: auto;
}
code {
  font-size: 0.85rem;
  line-height: 1.65;
  font-family: 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
}
</style>
