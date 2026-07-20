<!-- /home/rorinais/Desktop/vue-project/src/assets/component/home.vue -->
<script setup>
</script>

<template>
  <div class="main-home-root">
    <div class="home-overlay"></div>
    <span class="home-title">✦ RORINAIS</span>
  </div>
</template>

<style scoped>
.main-home-root {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background: url("/images/img.png") center/cover no-repeat;  /* 改为根路径 */
  border-radius: var(--radius-xl);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  min-height: 400px;
}

.home-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(15,20,25,0.5), rgba(30,35,50,0.3));
  border-radius: var(--radius-xl);
  z-index: 1;
}

.home-title {
  position: relative;
  z-index: 2;
  font-size: 3rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.08em;
  text-shadow: 0 4px 24px rgba(0,0,0,0.5);
}
</style>