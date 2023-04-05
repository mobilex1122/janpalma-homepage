import { createApp } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import './style.scss'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import Home from './pages/home.vue'
import About from './pages/about.vue'
import Errors from './pages/errors.vue'

const routes = [
    { 
      path: '/',
      component: Home,
      meta: {
        title: 'Jan Palma',
      }
  },
    { 
      path: '/about',
      component: About,
      meta: {
        title: 'Jan Palma - O mě',
      }
    },
    {
      path: '/:pathMatch(.*)',
      component: Errors,
      meta: { layout: 'none' }
  }
  ]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(), //createWebHashHistory(),
    routes, // short for `routes: routes`
  })
  
  // 5. Create and mount the root instance.

createApp(App).use(router).mount('#app')

