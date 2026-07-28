<script setup>
  import asides from '../data/url-name.json'
  let aside = asides['aside']
</script>

<template>
  <div class="topbar-root">
    <div class="topbar-inner">
      <!-- 左侧：头像 + 名字 -->
      <div class="topbar-brand">
        <router-link to="/" class="topbar-name">RORINAIS</router-link>
      </div>

      <!-- 右侧：导航链接 -->
      <nav class="topbar-nav">
        <router-link to="/" class="topbar-link" exact-active-class="router-link-active">首页</router-link>
        <router-link
          v-for="(value, keys) in aside"
          :key="keys"
          :to="value"
          class="topbar-link"
        >{{ keys }}</router-link>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.topbar-root {
  width: 100%;
  padding: 0 24px;
}

.topbar-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
}

/* 品牌区 */
.topbar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.topbar-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-heading);
  white-space: nowrap;
}
.topbar-name:hover {
  color: var(--accent);
}

/* 导航链接 */
.topbar-nav {
  display: flex;
  align-items: center;
  gap: 4px;
}
.topbar-link {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-body);
  transition: all 0.2s;
  white-space: nowrap;
}
.topbar-link:hover {
  background: var(--bg-tertiary);
  color: var(--accent);
}
.topbar-link.router-link-active {
  background: rgba(99,102,241,0.08);
  color: var(--accent);
  font-weight: 600;
}

/* 响应式 */
@media screen and (max-width: 800px) {
  .topbar-root {
    padding: 0 12px;
  }
  .topbar-inner {
    height: 48px;
  }
  .topbar-name {
    font-size: 1rem;
  }
  .topbar-link {
    padding: 4px 10px;
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 480px) {
  .topbar-inner {
    height: 42px;
    gap: 8px;
  }
  .topbar-name {
    font-size: 0.9rem;
  }
  .topbar-link {
    padding: 4px 8px;
    font-size: 0.75rem;
  }
}
</style>
