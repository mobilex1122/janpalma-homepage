<script setup lang="ts">
  import navbutton from '@comp/navbar/button.vue'
  import navbar from '@comp/navbar/main.vue'
  import navmenu from '@comp/navbar/menu.vue'
  import navsocmenu from '@comp/navbar/social-menu.vue'
  import navlink from '@comp/navbar/link.vue'
  import linkButton from '@comp/link-button.vue';
  import { state } from './props.js'

  //import { Tooltip } from 'bootstrap'

</script>
<template>
  <div>
    <title v-if="$route.query['e_as-the-register-g'] && $route.query['e_as-the-register-g'] != '69'">Zdravím dobrodruhu</title>
    <title v-else>Jan Palma - {{ $route.meta.title }}</title>
    
    <navbar class="bg-blur-md-20 bg-opacity-md-75" v-show="!$route.meta.nonav" brand='Jan Palma'>
      <navmenu>
        <navbutton to="/">Domov</navbutton>
        <navbutton to="/about">O mně</navbutton>
        <navbutton to="/gallery">Galerie</navbutton>
      </navmenu>
      <navsocmenu>
        <button type="button" class="me-3 me-lg-0 nav-link" data-bs-toggle="modal" data-bs-target="#settings"><i class="bi bi-gear-fill"></i></button>
        
        

        <div class="me-3 me-lg-0 py-2"><div style="height: 100%; width: 0; padding-inline: 0.04em; background-color: var(--bs-nav-link-color);"></div></div>

        <navlink to="https://github.com/mobilex1122" class="me-3 me-lg-0" ><i class="bi bi-github"></i></navlink>
        <navlink to="https://instagram.com/mobilex1122_cz/" class="me-3 me-lg-0" ><i class="bi bi-instagram"></i></navlink>
        <navlink to="https://www.facebook.com/mobilex1122.cz/" class="me-3 me-lg-0" ><i class="bi bi-facebook"></i></navlink>
        <navlink to="https://youtube.com/@mobilexENCZ/" class="me-3 me-lg-0" ><i class="bi bi-youtube"></i></navlink>
      </navsocmenu>
    </navbar>


    <!-- Settings -->

    <div class="modal fade" id="settings" tabindex="-1" data-bs-backdrop="static" aria-labelledby="settingslabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="settingslabel">Nastavení</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="settingsReducedAnim" @click="switchAnim()" v-model="state.reducedanim" >
              <label class="form-check-label" for="settingsReducedAnim">Mírnější animace (Odstraní přechodové animace)</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="settingsLightMode" @click="switchTheme()" v-model="state.lighttheme" >
              <label class="form-check-label" for="settingsLightMode">Světlý motiv</label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Hotovo</button>
          </div>
        </div>
      </div>
    </div>


    <!-- page render -->

    <div class="container my-4">
      <!-- Tree nav -->
      <nav v-if="$route.meta.type != 'error'" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li>
            <router-link v-if="$route.path != '/' " to="/">home</router-link>
            <span v-else>home</span>
          </li>
          <li v-for="(item, index) in $route.path.split('/')" class="breadcrumb-item">
            <span v-if="$route.path.split('/').slice(0,index+1).join('/') == $route.path">{{ item }}</span>
            <router-link v-else :to="$route.path.split('/').slice(0,index+1).join('/')">{{ item }}</router-link>
          </li>
        </ol>
      </nav>

      <!-- render -->
      <router-view id="renderview" v-slot="{ Component }" :class="{noanim: state.reducedanim}">
        <transition name="slide" mode="out-in">
            <component :is="Component" />
        </transition>
      </router-view>

    
    
    
    
    </div>
    
    <!-- footer -->


    
    <footer v-show="!$route.meta.nofooter" class="text-center bg-body-tertiary pt-3 pb-5">
      <div class="container">
        <div class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div class="col-md-4 d-flex align-items-center">
            <router-link to="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
              <!-- <svg class="bi" width="30" height="24"> -->
                <img v-if="state.lighttheme" src="/logo-dark.svg" width="30" height="24" alt="">
                <img v-else src="/logo-light.svg" width="30" height="24" alt="">
              </router-link>
            <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Jan Palma</span>
          </div>
          <div class="nav col-md-4 justify-content-end list-unstyled d-flex">
              <div class="btn-group" role="group" aria-label="Basic example">
                <link-button href="/" active_class="active">Domov</link-button>
                <link-button href="/about" active_class="active">O mě</link-button>
                <link-button href="/gallery" active_class="active">Galerie</link-button>
              </div>
          </div>
          <!-- <div class="mt-4">

            <span onclick="location.href = '?'" v-if="$route.query['e_as-the-register-g'] && $route.query['e_as-the-register-g'] != '69'">
              <i class="bi bi-arrow-right"></i> Zdravím dobrodruhu <i class="bi bi-arrow-left"></i>
            </span>
            <span onclick="location.href = '?'" v-else-if="$route.query['e_as-the-register-g'] == '69'">
              <i class="bi bi-arrow-right"></i> <i class="bi bi-6-circle"></i><i class="bi bi-9-circle"></i> <i class="bi bi-arrow-left"></i>
            </span>
            <span v-else><i onclick="location.href = '?e_as-the-register-g=1'" class="bi bi-c-circle">
              </i> <code>2023</code> Jan Palma
            </span>
          </div> -->
        </div> 
      
      </div>
      
    </footer>

  </div>
</template>

<script lang="ts">
  export default {
    
    methods: {
      switchAnim() {
        state.reducedanim = !state.reducedanim
        localStorage.reducedanim = state.reducedanim
        if (state.reducedanim) {
          document.querySelector("#renderview")?.classList.add("noanim")
        } else {
          document.querySelector("#renderview")?.classList.remove("noanim")
        }
        console.log(this.settings)
      },
      switchTheme() {
        state.lighttheme = !state.lighttheme
        if (state.lighttheme) {
          document.body.setAttribute("data-bs-theme", "light")
        }
        else {
          document.body.setAttribute("data-bs-theme", "dark")
        }
        localStorage.lighttheme = state.lighttheme
        console.log(this.settings)
      },
    },
    mounted() {
      if (localStorage.reducedanim) {
        state.reducedanim = Boolean((localStorage.reducedanim == "true"));
        
        

      }
      if (localStorage.lighttheme) {
        state.lighttheme = Boolean((localStorage.lighttheme == "true"));
      }


      if (state.lighttheme) {
          document.body.setAttribute("data-bs-theme", "light")
      }
      else {
        document.body.setAttribute("data-bs-theme", "dark")
      }

    }
  }
</script>

<style lang="css">
  :root {
    scroll-padding-top: 8rem;
  }

  * {
    transition: background-color 0.2s;
  }


  .slide-enter-active, .slide-leave-active {
    transform-origin: 50% 0%;
    transition: opacity 0.5s, transform 0.5s;
  }


  .slide-enter-from {
    opacity: 0;
    transform: scale(0.97);
  }
  .slide-leave-to {
    opacity: 0;
    transform: scale(0.97);
  }


  .moreanim:is(.slide-enter-active, .slide-leave-active) {
    transform-origin: 50% 20%;
    transition: opacity 0.4s, transform 0.4s, filter 0.4s;
  }

  .moreanim:is(.slide-enter-from,.slide-leave-to ) {
    opacity: 0;
    transform: translateX(-5rem);
    filter: blur(10px);
  }
  

  .noanim:is(.slide-enter-active, .slide-leave-active) {
    transition: 0s !important;
  }

  @media (prefers-reduced-motion) {
    .slide-enter-active, .slide-leave-active {
      transition: opacity 0.3s, transform 0s;
    }
    .slide-enter-from,.slide-leave-to {
    opacity: 0;
    transform: none;
    }
  }
</style>
