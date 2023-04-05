<script setup lang="ts">
  import navbutton from '@comp/nav-button.vue'
  import navbar from '@comp/navbar.vue'
  import linkButton from '@comp/link-button.vue';
</script>
<template>
  <div id="app" data-bs-theme="dark">
    <title v-if="$route.query['e_as-the-register-g'] && $route.query['e_as-the-register-g'] != '69'">Zdravím dobrodruhu</title>
    <title v-else>Jan Palma - {{ $route.meta.title }}</title>
    
    <navbar v-show="!$route.meta.nonav" brand='Jan Palma'>
      <navbutton to="/">Domov</navbutton>
      <navbutton to="/about">O mě</navbutton>
      <navbutton to="/gallery">Galerie</navbutton>
    </navbar>
  
    <div class="container my-4">
      <router-view></router-view>
    </div>
    
    <footer v-show="!$route.meta.nofooter" class="text-center bg-body-tertiary pt-3 pb-5">
      <div class="container">
        <div>
          <div class="btn-group" role="group" aria-label="Basic example">
            <linkButton href="/" active_class="active">Domov</linkButton>
            <linkButton href="/about" active_class="active">O mě</linkButton>
            <linkButton href="/gallery" active_class="active">Galerie</linkButton>
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
