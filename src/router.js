import { createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/home.vue'
import About from '@/views/about.vue'
import Projects from '@/views/projects/index.vue'
import Note from '@/views/note/index.vue'
import NoteDetail from '@/views/note/detail.vue'
import Message from '@/views/message.vue'
import Resume from '@/views/resume.vue'

const router=createRouter({
  history:createWebHistory(),
  routes:[
    { path:'/',           component: Home },
    { path:'/projects',   component: Projects },
    { path:'/resume',     component: Resume },
    { path:'/about',      component: About },
    { path:'/note',           component: Note },
    { path:'/note/empty',     component: NoteDetail },
    { path:'/note/:id/:page', component: NoteDetail },
    { path:'/note/:id',       component: NoteDetail },
    { path:'/message',        component: Message },
  ]
});
export default router
