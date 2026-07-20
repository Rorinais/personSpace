<script setup>
  import Aside from '@/assets/component/aside.vue'
</script>

<template>
  <div class="space-root">
    <div class="bg-dots"></div>
    <div class="space-container">
      <aside class="space-aside">
        <Aside />
      </aside>
      <main class="space-main">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
    <footer class="space-footer">
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
  --bg-primary: #f5f7fa;
  --bg-secondary: #ffffff;
  --bg-tertiary: #edf0f5;
  --sidebar-bg: #111827;
  --sidebar-text: #9ca3af;
  --sidebar-accent: #818cf8;
  --accent: #6366f1;
  --accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%);
  --border-color: #e5e7eb;
  --border-light: #f3f4f6;
  --shadow-md: 0 4px 16px rgba(0,0,0,0.06);
  --shadow-lg: 0 12px 32px rgba(0,0,0,0.08);
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
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
  font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  overflow: hidden;
}

a, router-link {
  color: var(--accent);
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;
}
a:hover, router-link:hover {
  color: #4f46e5;
  text-decoration: underline;
}

ul li {
  list-style: none;
}
</style>

<style scoped>
.space-root {
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

/* 动态光晕 */
.space-root::before {
  content: '';
  position: absolute;
  top: -30%;
  right: -15%;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  animation: floatBubble 20s ease-in-out infinite;
}
.space-root::after {
  content: '';
  position: absolute;
  bottom: -20%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  animation: floatBubble 25s ease-in-out infinite reverse;
}
@keyframes floatBubble {
  0%, 100% { transform: translate(0,0) scale(1); }
  25% { transform: translate(30px,-40px) scale(1.05); }
  50% { transform: translate(-20px,-20px) scale(0.95); }
  75% { transform: translate(15px,30px) scale(1.02); }
}

.bg-dots {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0.2;
  background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
}

.space-container {
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 0;
  background: transparent;
}

/* 侧边栏 */
.space-aside {
  position: relative;
  left: 0;
  padding-top: 32px;
  width: 20%;
  height: 100%;
  background-color: var(--sidebar-bg);
  box-sizing: border-box;
  overflow: hidden;
  border-right: 1px solid rgba(255,255,255,0.08);
  box-shadow: 4px 0 24px rgba(0,0,0,0.3);
  flex-shrink: 0;
  transition: width 0.3s;
}

/* 主内容 */
.space-main {
  flex: 1;
  height: 100%;
  padding: 0;
  background: transparent;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.space-main::-webkit-scrollbar {
  width: 5px;
}
.space-main::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}

/* Element Plus 内部容器 */
.space-main .el-container {
  width: 100%;
  height: 100%;
}
.space-main .el-main {
  padding-top: 28px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.space-main .el-aside {
  padding-top: 28px;
  right: 0;
  width: 25%;
  height: 100%;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(8px);
  box-sizing: border-box;
  border-left: 1px solid var(--border-light);
}

/* 页脚 */
.space-footer {
  position: fixed;
  bottom: 0;
  left: 20%;
  right: 0;
  height: 50px;
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(12px);
  border-top: 1px solid var(--border-light);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px;
  font-size: 0.75rem;
  color: #6b7280;
}
.space-footer a {
  color: var(--accent);
  font-weight: 500;
}

/* 响应式 */
@media screen and (max-width: 1300px) {
  .space-aside {
    width: 260px;
  }
  .space-footer {
    left: 260px;
  }
  .space-main .el-aside {
    background: rgba(255,255,255,0.4);
  }
}

@media screen and (max-width: 800px) {
  .space-aside {
    position: fixed;
    top: 0;
    padding-top: 16px;
    height: auto;
    width: 100%;
    z-index: 1000;
  }
  .space-main {
    margin-top: 160px;
  }
  .space-main .el-aside {
    position: fixed;
    width: 100%;
    background: rgba(255,255,255,0.8);
  }
  .space-main .el-main {
    position: relative;
    left: auto;
    transform: none;
    width: 100%;
    height: 100%;
    padding: 20px 10px;
  }
  .space-footer {
    left: 0;
    width: 100%;
    justify-content: center;
  }
}

/* 路由过渡 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>