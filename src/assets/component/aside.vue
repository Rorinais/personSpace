<script setup>
  import asides from '../url-name.json'
  let aside = asides['aside']
</script>
<style src="../css/aside.css" scoped/>

<template>
  <div class="aside-root">
    <div class="aside-container">
      <div class="aside-avatar"></div>
      <div class="aside-name">
        <h1>
          <router-link to="/">RORINAIS</router-link>
        </h1>
        <p>rorinais 个人空间</p>
      </div>
      <div class="aside-catalogue">
        <ul class="catalogue-list">
          <li v-for="(value, keys) in aside" :key="keys"><router-link :to="value"> {{keys}} </router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>