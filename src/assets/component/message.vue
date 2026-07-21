<script setup>
import ArticleSidebar from './article-sidebar.vue'
</script>

<template>
  <div class="page-layout">
  <div class="page-main">
  <div class="message-root">
    <h2 class="page-title">留言板</h2>
    <p class="page-desc">欢迎留下你的足迹，交流技术或随便聊聊~</p>

    <!-- 留言表单（占位） -->
    <div class="msg-form-card">
      <div class="form-field">
        <label>昵称</label>
        <input type="text" placeholder="你的昵称" disabled />
      </div>
      <div class="form-field">
        <label>留言</label>
        <textarea rows="3" placeholder="写下想说的话..." disabled></textarea>
      </div>
      <button class="submit-btn" disabled>发送留言（即将开放）</button>
    </div>

    <!-- 示例留言 -->
    <div class="msg-list">
      <div class="msg-item">
        <div class="msg-meta">
          <span class="msg-author">访客 A</span>
          <span class="msg-time">2024-07-15</span>
        </div>
        <p class="msg-text">示例留言</p>
      </div>
      <div class="msg-item">
        <div class="msg-meta">
          <span class="msg-author">访客 B</span>
          <span class="msg-time">2024-06-20</span>
        </div>
        <p class="msg-text">示例留言</p>
      </div>
      <div class="msg-item">
        <div class="msg-meta">
          <span class="msg-author">访客 C</span>
          <span class="msg-time">2024-05-10</span>
        </div>
        <p class="msg-text">示例留言</p>
      </div>
    </div>
  </div>
  </div>
  <div class="page-side"><ArticleSidebar /></div>
  </div>
</template>

<style scoped>
.page-layout {
  max-width: 1200px; margin: 0 auto; display: flex; gap: 24px; padding: 32px 24px;
}
.page-main { flex: 1; min-width: 0; }
.page-side { width: 260px; flex-shrink: 0; }

.message-root { padding-bottom: 40px; }

.page-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 8px;
}
.page-desc {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 32px;
}

/* 留言表单 */
.msg-form-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 24px 28px;
  margin-bottom: 36px;
  box-shadow: var(--shadow-sm);
}
.form-field {
  margin-bottom: 16px;
}
.form-field label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-body);
  margin-bottom: 6px;
}
.form-field input,
.form-field textarea {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 0.9rem;
  font-family: inherit;
  background: var(--bg-primary);
  color: var(--text-muted);
  resize: vertical;
}
.submit-btn {
  padding: 10px 24px;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: not-allowed;
  opacity: 0.5;
  transition: opacity 0.2s;
}

/* 留言列表 */
.msg-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.msg-item {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 18px 22px;
  box-shadow: var(--shadow-sm);
}
.msg-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
.msg-author {
  font-weight: 600;
  font-size: 0.88rem;
  color: var(--accent);
}
.msg-time {
  font-size: 0.78rem;
  color: var(--text-muted);
}
.msg-text {
  color: var(--text-body);
  font-size: 0.92rem;
  line-height: 1.7;
  margin: 0;
}

@media screen and (max-width: 900px) {
  .page-side { display: none; }
  .page-layout { padding: 20px 14px; }
}
@media screen and (max-width: 800px) {
  .message-root {
    padding: 20px 14px 60px;
  }
  .msg-form-card {
    padding: 18px 20px;
  }
}
</style>
