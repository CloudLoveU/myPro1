import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Home from '@/components/Home'
import Project from '@/components/Project'
import Document from '@/components/Document'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Document',
      name: 'Document',
      component: Document
    },
    {
      path: '/Project',
      name: 'Project',
      component: Project
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
