<script setup>
</script>

<template>
  <el-container class="main-message-root">
    <el-main class="main-message-main">
      <p>未开发</p>
    </el-main>
    <el-aside class="main-message-aside"></el-aside>
  </el-container>
</template>

<style scoped>
.main-message-root {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.main-message-main p {
  font-size: 1.2rem;
  color: #8b919e;
  padding: 40px 60px;
  background: #ffffff;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 2px dashed var(--border-color);
}
</style>