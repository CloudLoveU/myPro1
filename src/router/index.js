import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/Hello'
import Home from '@/components/Home'

import Project from '@/backend/childFiles/Project'
import Workbentch from '@/backend/childFiles/Workbentch'
import Document from '@/backend/childFiles/Document'
import layout from '@/backend/layout'

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
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout,
      children: [
        {
          path: '/Project',
          name: 'Project',
          component: Project
        },
        {
          path: '/Workbentch',
          name: 'Workbentch',
          component: Workbentch
        },
        {
          path: '/Document',
          name: 'Document',
          component: Document
        }
      ]
    }
  ]
})
