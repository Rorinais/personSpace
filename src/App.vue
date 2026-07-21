<script setup>
  import Aside from '@/assets/component/aside.vue'
  import { useRoute } from 'vue-router'
  import { computed, ref, onMounted } from 'vue'

  const route = useRoute()
  const isHome = computed(() => route.path === '/')

  // 滚动感知顶栏
  const showTopbar = ref(true)
  let lastScroll = 0
  function onScroll(e) {
    const y = e.target.scrollTop
    if (y > lastScroll && y > 60) showTopbar.value = false
    else showTopbar.value = true
    lastScroll = y
  }

  onMounted(() => {
    const el = document.querySelector('.space-main')
    if (el) el.addEventListener('scroll', onScroll)
  })
</script>

<template>
  <div class="space-root" :class="{ 'is-home': isHome }">
    <!-- 顶栏：首页隐藏 -->
    <aside class="space-aside" :class="{ hidden: !showTopbar }" v-if="!isHome">
      <Aside />
    </aside>

    <!-- 面包屑（下滚出现） -->
    <div class="breadcrumb" v-if="!isHome && !showTopbar">
      <router-link to="/">首页</router-link>
      <span>/</span>
      <span>{{ route.meta?.title || route.path.slice(1) || '页面' }}</span>
    </div>

    <main class="space-main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 页脚：首页隐藏 -->
    <footer class="space-footer" v-if="!isHome">
      <div>
        Copyright © 2024 <a href="https://rorinais.cn/">rorinais.cn</a>
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"> 桂ICP备2024044764号-1</a>
      </div>
    </footer>
  </div>
</template>

<style>
/* ========== 全局重置与变量 ========== */
:root {
  --bg-primary: #fafaf9;
  --bg-secondary: #ffffff;
  --bg-tertiary: #f5f5f4;
  --sidebar-bg: #ffffff;
  --sidebar-text: #64748b;
  --sidebar-accent: #6366f1;
  --accent: #6366f1;
  --accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  --border-color: #e7e5e4;
  --border-light: #f5f5f4;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.06);
  --shadow-lg: 0 12px 28px rgba(0,0,0,0.08);
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --text-heading: #1a1a2e;
  --text-body: #4a5568;
  --text-muted: #94a3b8;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: var(--bg-primary);
  font-family: 'Inter', 'Noto Serif SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  line-height: 1.8;
  color: var(--text-body);
}

a, router-link {
  color: var(--accent);
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;
}
a:hover, router-link:hover {
  color: #4f46e5;
  text-decoration: none;
}

ul li {
  list-style: none;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--text-heading);
  line-height: 1.4;
}
</style>

<style scoped>
.space-root {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: var(--bg-primary);
}

/* 首页：去掉 flex 列约束，让内容自由撑满 */
.space-root.is-home {
  overflow: visible;
}

/* 顶部导航栏 */
.space-aside {
  width: 100%;
  flex-shrink: 0;
  background-color: var(--sidebar-bg);
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  z-index: 20;
  position: sticky;
  top: 0;
  transition: transform 0.3s ease;
}
.space-aside.hidden {
  transform: translateY(-100%);
}

/* 面包屑 */
.breadcrumb {
  position: sticky;
  top: 0;
  z-index: 15;
  padding: 10px 24px;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border-color);
  font-size: 0.82rem;
  color: var(--text-muted);
  transition: transform 0.3s ease;
}
.breadcrumb a { color: var(--text-muted); }
.breadcrumb a:hover { color: var(--accent); }
.breadcrumb span { margin: 0 4px; }

/* 主内容 */
.space-main {
  flex: 1;
  width: 100%;
  background: var(--bg-primary);
  overflow-y: auto;
  scroll-behavior: smooth;
}
.space-root.is-home .space-main {
  overflow-y: visible;
}
.space-main::-webkit-scrollbar {
  width: 5px;
}
.space-main::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 10px;
}

/* 页脚 */
.space-footer {
  width: 100%;
  flex-shrink: 0;
  height: 42px;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  font-size: 0.75rem;
  color: var(--text-muted);
}
.space-footer a {
  color: var(--text-muted);
  font-weight: 400;
  margin: 0 8px;
}
.space-footer a:hover {
  color: var(--accent);
}

/* 响应式 — 手机 */
@media screen and (max-width: 800px) {
  .breadcrumb { padding: 8px 14px; font-size: 0.75rem; }
  .space-footer {
    font-size: 0.65rem;
    padding: 0 8px;
  }
}

/* 路由过渡 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>