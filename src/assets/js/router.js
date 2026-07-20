import { createRouter, createWebHashHistory} from 'vue-router'
import resume from '../component/resume.vue'
import Home from '@/assets/component/home.vue'
import About from '@/assets/component/about.vue'
import Projects from '@/assets/component/projects.vue'
import Note from '@/assets/component/note.vue'
import Message from '@/assets/component/message.vue'
import vehicleManagementSystem from '@/assets/component/projects/vehicleManagementSystem.vue'
import personSpace from '@/assets/component/projects/personSpace.vue'
import opengl from '@/assets/component/projects/opengl.vue'

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
    },
    {
      path:'/projects/vehicleManagementSystem',
      component:vehicleManagementSystem,
    },
    {
      path:'/projects/personSpace',
      component:personSpace,
    },
    {
      path:'/projects/opengl',
      component:opengl,
    }
  ]
});
export default router
