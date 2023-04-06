import { createApp } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import './style.scss'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import Home from './pages/home.vue'
import About from './pages/about.vue'
import Gallery from './pages/gallery.vue'
import AboutWeb from './pages/webinfo.vue'
import Errors from './pages/errors.vue'

import GlobalCCode from '@comp/global/ccode.vue'

const routes = [
    { 
      path: '/',
      component: Home,
      meta: {
        title: 'Domov',
      }
    },
    { 
      path: '/about',
      component: About,
      meta: {
        title: 'O mě',

      }
    },
    { 
      path: '/gallery',
      component: Gallery,
      meta: {
        title: 'Galerie',
      }
    },
    {
      path: '/about/web',
      component: AboutWeb,
      meta: {
        title: 'O Stránce',
      }
    },
    {
      path: '/:pathMatch(.*)',
      component: Errors,
      meta: { layout: 'none', title: '404', nofooter:true, type:"error" }
  }
  ]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(), //createWebHashHistory(),
    routes, // short for `routes: routes`
  })
  
  // 5. Create and mount the root instance.


createApp(App).use(router).component(
  // the registered name
  'ccode',
  GlobalCCode
  
).mount('#app')

