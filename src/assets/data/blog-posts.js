// 博客文章数据：整合 projects 和 notes，添加时间戳和摘要
import data from '../url-name.json'

const projects = data.projects || []
const notes = data.note || []

function buildPosts() {
  const posts = []

  // 项目文章
  projects.forEach(category => {
    const catName = Object.keys(category.header)[0] || '项目'
    category.content.forEach(item => {
      posts.push({
        id: item.url.replace(/\//g, '-'),
        title: item.name,
        date: '2024.07.15',
        displayDate: '2024年7月15日',
        excerpt: `${item.name} — 基于 Vue 3 + Element Plus 开发的实战项目，涵盖前后端交互与组件化设计。`,
        category: catName,
        route: item.url,
        icon: '📁'
      })
    })
  })

  // 笔记文章
  notes.forEach(category => {
    const catName = Object.keys(category.header)[0] || '笔记'
    category.content.forEach(item => {
      posts.push({
        id: item.url.replace(/\//g, '-') + '-note',
        title: item.name,
        date: '2024.06.20',
        displayDate: '2024年6月20日',
        excerpt: `学习笔记：${item.name} — 记录学习过程中的关键知识点和实践心得，持续更新中。`,
        category: catName,
        route: item.url,
        icon: '📝'
      })
    })
  })

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
