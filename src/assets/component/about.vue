<script setup>
import about from '../url-name.json'
let content = about['about']
</script>

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
          <h3>{{ items['header'] }}</h3>
          <p v-for="(item, index) in items['content']" :key="index">{{ item }}</p>
        </section>
        <section>
          <el-row align="middle">
            <el-col :span="items['span']" v-for="(items, indexes) in content[1]" :key="indexes">
              <a :href="items['url']" target="_blank">
                <img :src="items['image']" alt="" />{{ items['name'] }}
              </a>
            </el-col>
          </el-row>
        </section>
      </div>
    </el-main>
    <el-aside class="main-about-aside">
    </el-aside>
  </el-container>
</template>

<style scoped>
.main-about-root {
  max-width: 800px;
  margin: 0 auto;
  height: 100%;
}

blockquote {
  margin: 0 0 28px;
  padding: 20px 24px;
  background: #ffffff;
  border-left: 4px solid var(--accent);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  box-shadow: var(--shadow-md);
  font-style: italic;
  color: #4b5563;
  position: relative;
}
blockquote::before {
  content: '"';
  position: absolute;
  top: -10px;
  left: 12px;
  font-size: 3rem;
  color: var(--accent);
  opacity: 0.3;
  font-family: Georgia, serif;
}

section h3 {
  font-weight: 700;
  margin: 16px 0 10px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--border-color);
  display: inline-block;
}

section a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #eef2ff;
  color: var(--accent);
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  margin: 4px;
  transition: 0.2s;
}
section a:hover {
  background: var(--accent);
  color: #fff;
}
section img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
}
</style>