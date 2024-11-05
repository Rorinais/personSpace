<script setup>
import about from '../url-name.json'
let content = about['about']

</script>

<style src="../css/about.css" scoped />

<template>
  <el-container class="main-about-root">
    <el-main class="main-about-main">
      <div class="main-about-main-root">

        <blockquote>
          <p>可以喜欢一个人，一件事或物很长一段时间，
            如果某一天真的不喜欢了，可能真的已经失望透顶了，真的感觉到累了。
            对于喜欢，我觉得不仅仅是说说而已，更应该全身心投入。</p>
          <p style="text-align: right">2023-09-18</p>
        </blockquote>
        <section v-for="(items, indexes) in content[0]" :key="indexes">
          <h3>{{items['header']}}</h3>
          <p v-for="(item,index) in items['content']" :key="index">{{item}}</p>
        </section>
        <section>
          <el-row align="middle">
            <el-col :span="items['span']" v-for="(items, indexes) in content[1]" :key="indexes">
              <a :href="items['url']" target="_blank"><img :src="items['image']" alt="" />{{items['name']}}</a>
            </el-col>
          </el-row>
        </section>
      </div>
    </el-main>
    <el-aside class="main-about-aside">
    </el-aside>
  </el-container>
</template>
