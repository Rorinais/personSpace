<!-- 文章页右侧边栏 -->
<script setup>
import info from '../data/Information.json'
import notes from '../data/url-name.json'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({ headings: { type: Array, default: () => [] } })
const emit = defineEmits(['scroll-to'])

const person = info.information
const noteList = notes['note']
const route = useRoute()
const currentId = computed(() => route.params.id)
</script>

<template>
  <div class="sidebar-root">
    <!-- 头像 + 信息 -->
    <div class="sidebar-profile">
      <div class="sidebar-avatar"></div>
      <h3>{{ person.name }}</h3>
      <p class="sidebar-desc">热爱编程与图形学，喜欢探索和分享技术。</p>
    </div>

    <!-- 文件导航 -->
    <nav class="sidebar-nav">
      <h4>📂 笔记导航</h4>
      <div v-for="(cat, ci) in noteList" :key="ci" class="nav-cat">
        <p class="nav-cat-name" v-for="(_, name) in cat.header" :key="name">{{ name }}</p>
        <router-link
          v-for="item in cat.content"
          :key="item.url"
          :to="item.url"
          class="nav-file"
          :class="{ active: currentId === item.url.split('/').pop() }"
        >{{ item.name }}</router-link>
      </div>
    </nav>

    <!-- 本页目录（仅笔记详情页显示） -->
    <nav class="sidebar-toc" v-if="headings.length">
      <h4>📑 本页目录</h4>
      <a v-for="h in headings" :key="h.id" class="toc-link" @click.prevent="emit('scroll-to', h.id)">{{ h.text }}</a>
    </nav>

    <!-- 联系方式 -->
    <div class="sidebar-contact">
      <h4>联系方式</h4>
      <a href="https://github.com/Rorinais" target="_blank">🐙 GitHub</a>
      <a href="mailto:413843928@qq.com">📧 {{ person.email }}</a>
    </div>
  </div>
</template>

<style scoped>
.sidebar-root {
  padding: 32px 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar-profile {
  text-align: center;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-color);
}
.sidebar-avatar {
  width: 72px; height: 72px; border-radius: 50%;
  background-image: url('/images/avatar.jpg');
  background-position: center center;
  background-size: cover;
  margin: 0 auto 12px;
  border: 2px solid var(--border-color);
}
.sidebar-profile h3 { font-size: 1rem; color: var(--text-heading); font-weight: 700; }
.sidebar-desc { font-size: 0.75rem; color: var(--text-muted); line-height: 1.6; margin-top: 8px; }

/* 笔记导航 */
.sidebar-nav h4,
.sidebar-contact h4 {
  font-size: 0.75rem; color: var(--text-muted);
  text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 10px;
}
.nav-cat { margin-bottom: 14px; }
.nav-cat-name {
  font-size: 0.72rem; color: var(--text-muted);
  font-weight: 600; padding: 2px 4px; margin-bottom: 2px;
}
.nav-file {
  display: block;
  font-size: 0.82rem; color: var(--text-body);
  padding: 4px 4px 4px 14px; border-radius: 5px; transition: 0.15s;
  border-left: 2px solid transparent;
}
.nav-file:hover { background: var(--bg-tertiary); color: var(--accent); }
.nav-file.active {
  color: var(--accent); font-weight: 600;
  background: rgba(99,102,241,0.06);
  border-left-color: var(--accent);
}

/* 本页目录 */
.sidebar-toc h4 {
  font-size: 0.72rem; color: var(--text-muted);
  text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;
}
.toc-link {
  display: block; font-size: 0.8rem; color: var(--text-body);
  padding: 4px 6px; border-radius: 4px; cursor: pointer;
  transition: 0.15s;
}
.toc-link:hover { color: var(--accent); background: rgba(99,102,241,0.04); }

.sidebar-contact {
  border-top: 1px solid var(--border-color); padding-top: 16px;
}
.sidebar-contact a {
  display: block; font-size: 0.82rem; color: var(--text-body);
  padding: 4px 8px; border-radius: 6px; transition: 0.2s;
}
.sidebar-contact a:hover { background: var(--bg-tertiary); color: var(--accent); }
</style>
