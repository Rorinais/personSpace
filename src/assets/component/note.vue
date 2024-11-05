<script setup>
  import notes from '../url-name.json'
  let note=notes['note']
</script>
<style src="../css/note.css" scoped/>

<template>

  <el-container class="main-learn-root">
    <el-main class="main-learn-main">
      <el-row v-for="(items,indexes) in note" :key="indexes">
        <el-col :span="item" v-for="(item,index) in items['header']" :key="index"><h3>{{index}}</h3></el-col>
        <el-col :span="item['span']" v-for="(item,index) in items['content']" :key="index">
          <div><router-link :to="item['url']">{{item['name']}}</router-link></div>
        </el-col>

      </el-row>
    </el-main>
    <el-aside class="main-learn-aside"> </el-aside>
  </el-container>

</template>
