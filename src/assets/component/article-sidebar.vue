<!-- 文章页右侧边栏 -->
<script setup>
import personInfo from '../person.json'

const person = personInfo.person
</script>

<template>
  <div class="sidebar-root">
    <!-- 头像 + 信息 -->
    <div class="sidebar-profile">
      <div class="sidebar-avatar"></div>
      <h3>{{ person.name }}</h3>
      <p class="sidebar-desc">热爱编程与图形学，喜欢探索和分享技术。</p>
    </div>

    <!-- 文章导航（待定） -->
    <nav class="sidebar-nav">
      <h4>文章导航</h4>
      <p class="sidebar-placeholder">暂无数据，待定</p>
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
  gap: 24px;
}

.sidebar-profile {
  text-align: center;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-color);
}
.sidebar-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-image: url('/images/avatar.jpg');
  background-position: center center;
  background-size: cover;
  margin: 0 auto 12px;
  border: 2px solid var(--border-color);
}
.sidebar-profile h3 {
  font-size: 1rem;
  color: var(--text-heading);
  font-weight: 700;
}
.sidebar-desc {
  font-size: 0.75rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-top: 8px;
}

.sidebar-nav h4,
.sidebar-contact h4 {
  font-size: 0.78rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
}
.sidebar-placeholder {
  font-size: 0.82rem;
  color: var(--text-muted);
  font-style: italic;
}

.sidebar-contact {
  border-top: 1px solid var(--border-color);
  padding-top: 16px;
}
.sidebar-contact a {
  display: block;
  font-size: 0.82rem;
  color: var(--text-body);
  padding: 4px 8px;
  border-radius: 6px;
  transition: 0.2s;
}
.sidebar-contact a:hover {
  background: var(--bg-tertiary);
  color: var(--accent);
}
</style>
