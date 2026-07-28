<!-- 页面布局容器：max-width 1200px + 左内容 + 右侧栏 -->
<script setup>
defineProps({
  sidebar: { type: Boolean, default: true }
})
</script>

<template>
  <div class="page-layout">
    <div class="page-main">
      <slot />
    </div>
    <div class="page-side" v-if="sidebar">
      <slot name="sidebar" />
    </div>
  </div>
</template>

<style scoped>
.page-layout { max-width: 1200px; margin: 0 auto; display: flex; gap: 24px; padding: 32px 24px; }
.page-main { flex: 1; min-width: 0; }
.page-side { width: 260px; flex-shrink: 0; }
@media screen and (max-width: 900px) {
  .page-side { display: none; }
  .page-layout { padding: 20px 14px; }
}
</style>
