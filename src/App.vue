<script setup lang="ts">
  import navbutton from '@comp/navbar/button.vue'
  import navbar from '@comp/navbar/main.vue'
  import navmenu from '@comp/navbar/menu.vue'
  import navsocmenu from '@comp/navbar/social-menu.vue'
  import navlink from '@comp/navbar/link.vue'
  import linkButton from '@comp/link-button.vue';
import path from 'path'
</script>
<template>
  <div id="app" data-bs-theme="dark">
    <title v-if="$route.query['e_as-the-register-g'] && $route.query['e_as-the-register-g'] != '69'">Zdravím dobrodruhu</title>
    <title v-else>Jan Palma - {{ $route.meta.title }}</title>
    
    <navbar v-show="!$route.meta.nonav" brand='Jan Palma'>
      <navmenu>
        <navbutton to="/">Domov</navbutton>
        <navbutton to="/about">O mě</navbutton>
        <navbutton to="/gallery">Galerie</navbutton>
      </navmenu>
      <navsocmenu>
        <navlink to="https://github.com/mobilex1122" class="me-3 me-lg-0" ><i class="bi bi-github"></i></navlink>
        <navlink to="https://instagram.com/mobilex1122_cz/" class="me-3 me-lg-0" ><i class="bi bi-instagram"></i></navlink>
        <navlink to="https://www.facebook.com/mobilex1122.cz/" class="me-3 me-lg-0" ><i class="bi bi-facebook"></i></navlink>
        <navlink to="https://youtube.com/@mobilexENCZ/" class="me-3 me-lg-0" ><i class="bi bi-youtube"></i></navlink>
      </navsocmenu>
      
    </navbar>

  
    <div class="container my-4">
      <nav v-if="$route.meta.type != 'error'" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li>
            <router-link v-if="$route.path != '/' " to="/">home</router-link>
            <span v-else>home</span>
          </li>
          <li v-for="(item, index) in $route.path.split('/')" class="breadcrumb-item">
            <span v-if="$route.path.split('/').slice(0,index+1).join('/') == $route.path">{{ item }}</span>
            <a v-else :href="$route.path.split('/').slice(0,index+1).join('/')">{{ item }}</a>
          </li>
        </ol>
      </nav>

      <router-view></router-view>
    </div>
    
    <footer v-show="!$route.meta.nofooter" class="text-center bg-body-tertiary pt-3 pb-5">
      <div class="container">
        <div>
          <div class="btn-group" role="group" aria-label="Basic example">
            <link-button href="/" active_class="active">Domov</link-button>
            <link-button href="/about" active_class="active">O mě</link-button>
            <link-button href="/gallery" active_class="active">Galerie</link-button>
          </div>
        </div>
        <div class="mt-4">
          
          <span onclick="location.href = '?'" v-if="$route.query['e_as-the-register-g'] && $route.query['e_as-the-register-g'] != '69'">
            <i class="bi bi-arrow-right"></i> Zdravím dobrodruhu <i class="bi bi-arrow-left"></i>
          </span>
          <span onclick="location.href = '?'" v-else-if="$route.query['e_as-the-register-g'] == '69'">
            <i class="bi bi-arrow-right"></i> <i class="bi bi-6-circle"></i><i class="bi bi-9-circle"></i> <i class="bi bi-arrow-left"></i>
          </span>
          <span v-else><i onclick="location.href = '?e_as-the-register-g=1'" class="bi bi-c-circle">
            </i> <code>2023</code> Jan Palma
          </span>
        </div>
      </div>
      
      
    </footer>

  </div>
</template>

<style>
  :root {
    scroll-padding-top: 8rem;
  }
</style>
