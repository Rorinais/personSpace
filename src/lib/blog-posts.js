// 博客文章数据：整合 projects 和 notes，添加时间戳和摘要
import data from '../data/url-name.json'

const projects = data.projects || []
const notes = data.note || []

function buildPosts() {
  const posts = []

  // 笔记文章 → 跳转到笔记详情
  notes.forEach(category => {
    const catName = Object.keys(category.header)[0] || '笔记'
    category.content.forEach(item => {
      const d = item.date || '2024.06.20'
      posts.push({
        id: item.url.replace(/\//g, '-') + '-note',
        title: item.name,
        date: d,
        displayDate: (parts => `${parts[0]}年${parseInt(parts[1])}月${parseInt(parts[2])}日`)(d.split('-')),
        excerpt: item.desc || `学习笔记：${item.name}`,
        category: catName,
        route: item.url,
        icon: '📝'
      })
    })
  })

  // 项目文章 → 跳转到项目列表页
  // projects.forEach(category => {
  //   const catName = Object.keys(category.header)[0] || '项目'
  //   category.content.forEach((item, idx) => {
  //     posts.push({
  //       id: 'project-' + idx,
  //       title: item.name,
  //       date: '2024.07.15',
  //       displayDate: '2024年7月15日',
  //       excerpt: `${item.name} — 基于 Vue 3 + Element Plus 开发的实战项目。`,
  //       category: catName,
  //       route: '/projects',
  //       icon: '📁'
  //     })
  //   })
  // })

  // 按日期倒序
  posts.sort((a, b) => (b.date > a.date ? 1 : -1))
  return posts
}

export const blogPosts = buildPosts()

// 侧边栏分类统计
export function getCategories() {
  const map = {}
  blogPosts.forEach(p => {
    map[p.category] = (map[p.category] || 0) + 1
  })
  return Object.entries(map).map(([name, count]) => ({ name, count }))
}
