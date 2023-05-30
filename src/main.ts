import { createApp, reactive } from 'vue'
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import './style.scss'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import Home from '@p/home.vue'
import Errors from './pages/errors.vue'

import GlobalCCode from '@comp/global/ccode.vue'
import Loading from '@comp/system/loading.vue'


const routes: RouteRecordRaw[] = [
    { 
      path: '/',
      component: Home,
      meta: {
        title: 'Domů',
        description: "Hlavní Domovská stránka"
      }
    },
    { 
      path: '/about',
      component: ()=>import("@p/about.vue"),
      meta: {
        title: 'O mně',
        description: "Jak jsem začal a co dělám."
      }
    },
    { 
      path: '/gallery',
      component: ()=>import("@p/gallery.vue"),
      meta: {
        title: 'Galerie',
        description: "Videa, obrázky a kresby co jsem udělal."
      }
    },
    {
      path: '/about/web',
      component: ()=>import("@p/webinfo.vue"),
      meta: {
        title: 'O Stránce',
        description:"Zajímavosti o této stránce",
        show: false
      }
    },
    {
      path: '/anime',
      component: ()=>import("@p/anime.vue"),
      meta: {
        title: 'Anime',
      }
    },
    {
      path: '/projects',
      component: ()=>import("@p/projects/index.vue"),
      meta: {
        title: 'Projekty',
        description:"Projekty které jsem udělal.",

      }
    },
    {
      path: '/blog',
      component: ()=>import("@p/blog.vue"),
      meta: {
        title: 'Blog',
        description:"Můj blog",
      }
    },
    {
      path: '/:pathMatch(.*)',
      component: Errors,
      meta: { layout: 'none', title: '404', nofooter:true, type:"error", show:false }
  }
  ]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(), //createWebHashHistory(),
    routes, // short for `routes: routes`
    scrollBehavior(){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ left: 0, top: 0, behavior: "auto"})
        }, 20)
      })
    }
  })
  
  // 5. Create and mount the root instance.



// router.beforeEach((to, from, next) => {
//   // check for changes to the global property
//   if (state.lighttheme !== localStorage.lighttheme) {
//     // update the global property with the new value
//     state.lighttheme = (localStorage.lighttheme == 'true')
//   }
//   // continue with the navigation
//   next()
// })







createApp(App).use(router).component(
  // the registered name
  'ccode',
  GlobalCCode
  
).mount('#app')

