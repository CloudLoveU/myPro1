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

let router = new Router({
  mode: 'history',
  linkActiveClass: 'is-Active',
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
          component: Project,
          meta: {
            login: true
          }
        },
        {
          path: '/Workbentch',
          name: 'Workbentch',
          component: Workbentch,
          meta: {
            login: true
          }
        },
        {
          path: '/Document',
          name: 'Document',
          component: Document,
          meta: {
            login: false
          }
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  let bl = to.matched.some(function (item) {
    return item.meta.login
  })
  if (bl) { // to.matched是一个数组 存着子路由及父路由信息 有一条数据login为true即执行函数
    let info = router.app.$local.fetch('wy')  // router指向根实例 #app
    if (info.login) { // 已经登录
      next()
    } else {
      router.push({
        path: '/Login',
        query: {
          redirect: to.path.slice(1)
        }
      })
    }
  } else {
    next()
  }
})
export default router
