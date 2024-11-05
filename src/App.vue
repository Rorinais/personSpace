<script setup>
  import './assets/css/space.css'
  import Aside from '@/assets/component/aside.vue'
</script>

<template>
  <div class="space-root">
    <div class="box"></div>
    <el-container class="space-container">
      <el-aside class="space-aside"><Aside/></el-aside>
      <el-main class="space-main"><router-view></router-view></el-main>
    </el-container>
    <el-footer class="space-footer" >
      <div>
        Copyright © 2024 <a href="https://rorinais.cn/">rorinais.cn</a>
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank"> 桂ICP备2024044764号-1</a>
      </div>
    </el-footer>
  </div>
</template>