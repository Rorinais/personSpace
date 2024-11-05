import { createRouter, createWebHashHistory} from 'vue-router'
import resume from '../component/resume.vue'
import Home from '@/assets/component/home.vue'
import About from '@/assets/component/about.vue'
import Projects from '@/assets/component/projects.vue'
import Note from '@/assets/component/note.vue'
import Message from '@/assets/component/message.vue'

const router=createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:'/',
      component:Home,
    },
    {
      path:'/projects',
      component:Projects,
    },
    {
      path:'/resume',
      component:resume
    },
    {
      path:'/about',
      component:About,
    },
    {
      path:'/note',
      component:Note,
    },
    {
      path:'/message',
      component:Message,
    }

  ]
});
export default router
