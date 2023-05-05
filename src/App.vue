<script setup lang="ts">
  import navbutton from '@comp/navbar/button.vue'
  import navbar from '@comp/navbar/main.vue'
  import navmenu from '@comp/navbar/menu.vue'
  import navsocmenu from '@comp/navbar/social-menu.vue'
  import navlink from '@comp/navbar/link.vue'
  import linkButton from '@comp/link-button.vue';
  import { state, pages } from './props.js'

</script>
<template>
  <div>
    <title v-if="$route.query['e_as-the-register-g'] && $route.query['e_as-the-register-g'] != '69'">Zdravím dobrodruhu</title>
    <title v-else>Jan Palma - {{ $route.meta.title }}</title>
    
    <navbar :class="{'bg-blur-md-20 bg-opacity-md-75':state.blur}" class="border-bottom navbar-noise" v-show="!$route.meta.nonav" brand='Jan Palma'>
		<template v-for="data in pages">
			<navmenu v-if="data.ismain == true">
           		<template v-for="page in data.pages">
       				<navbutton :to="page.url">{{ page.title }}</navbutton>
      			</template>
			</navmenu>
		</template>
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
      <div class="modal-dialog modal-fullscreen-md-down modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="settingslabel">Nastavení</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- reduced animations -->
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="settingsReducedAnim" @click="switchAnim()" v-model="state.reducedanim" >
              <label class="form-check-label" for="settingsReducedAnim">Mírnější animace (Odstraní přechodové animace)</label>
            </div>
            <!-- Theme -->
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="settingsLightMode" @click="switchTheme()" v-model="state.lighttheme" >
              <label class="form-check-label" for="settingsLightMode">Světlý motiv</label>
            </div>
            <!-- Blur -->
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="settingsBlur" @click="switchBlur()" v-model="state.blur" >
              <label class="form-check-label" for="settingsBlur">Rozmazání (Vypnuto = lepší výkon)</label>
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


    
    <footer v-show="!$route.meta.nofooter" class=" bg-body-tertiary pt-3 pb-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-3 my-4 border-top">
          <div class="col mb-3">
            <div class="mb-2">
              <router-link to="/" class="text-body-secondary text-decoration-none">
                <!-- <svg class="bi" width="30" height="24"> -->
                <img v-if="state.lighttheme" src="/logo-dark.svg" width="50" height="50" alt="">
                <img v-else src="/logo-light.svg" width="50" height="50" alt="">
              </router-link>
            </div>
            

            <p class="text-body-secondary">
              <span class="mb-3 mb-md-0 text-body-secondary" onclick="location.href = '?'" v-if="$route.query['e_as-the-register-g'] && $route.query['e_as-the-register-g'] != '69'">
              <i class="bi bi-arrow-right"></i> Zdravím dobrodruhu <i class="bi bi-arrow-left"></i>
              </span>
              <span class="mb-3 mb-md-0 text-body-secondary" onclick="location.href = '?'" v-else-if="$route.query['e_as-the-register-g'] == '69'">
                <i class="bi bi-arrow-right"></i> <i class="bi bi-6-circle"></i><i class="bi bi-9-circle"></i> <i class="bi bi-arrow-left"></i>
              </span>
              <span class="mb-3 mb-md-0 text-body-secondary" v-else><span onclick="location.href = '?e_as-the-register-g=1'">©</span> 2023 Jan Palma
              </span>
            </p>
            
          </div>
          <!-- Auto generated links from /src/props.ts -->
          <div v-for="data in pages" class="col mb-3">
                <!-- Category name -->
                <h5>{{ data.name}}</h5>

                <!-- Generate based on type -->
                <!-- Links (outside main domain) -->
                <ul v-if="data.type == 'links'" class="nav flex-column">
                  <li v-for="page in data.pages" class="nav-item mb-2">
                    <a :href="page.url" target="_blank">{{ page.title }}</a>
                  </li>
                </ul>

                <!-- Pages (inside main domian) -->
                <ul v-else class="nav flex-column">
                  <li v-for="page in data.pages" class="nav-item mb-2">
                    <router-link class="nav-link p-0 text-body-secondary" :to="page.url" active_class="active">{{ page.title }}</router-link>
                  </li>
                </ul>
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
      switchBlur() {
        state.blur = !state.blur
        localStorage.blur = state.blur
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

      if (localStorage.blur) {
        state.blur = Boolean((localStorage.blur== "true"));
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
  .navbar-noise::before {
    position: absolute;
    content: "";
    background-image: url(/noise.png);
    background-size: 500px 500px;
    opacity: 0.1;
    z-index: -3;
    width: 100%;
    height: 100%;
  }

  :root {
    scroll-padding-top: 8rem;
  }

  * {
    transition: background-color 0.2s, backdrop-filter 0.2s;
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
