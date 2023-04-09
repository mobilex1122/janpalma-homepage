<script setup lang="ts">
</script>


<template>
    <div v-if="loading" class="loading">
    Loading...
  </div>
    <router-view v-else/>
</template>
  
<script>
  export default {
    data() {
      return {
        loading: false
      };
    },
    watch: {
      '$route' (to, from) {
        this.loading = true;
      }
    }
  }
  </script>
  
  <style>
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  </style>
  