<script setup lang="ts">
  import navbutton from '@comp/nav-button.vue'
  import navbar from '@comp/navbar.vue'
</script>
<template>
  <div id="app"  data-bs-theme="dark">
    <title>{{ $route.meta.title }}</title>
    <navbar brand='Jan Palma'>
      <navbutton to="/">Home</navbutton>
      <navbutton to="/about">About</navbutton>
    </navbar>
  
    <div class="container">
      <router-view></router-view>
    </div>
  
  </div>
</template>
