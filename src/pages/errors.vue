<script setup lang="ts">
</script>

<template>
    <div class="text-center position-absolute top-50 start-50 translate-middle">
        <h1 class="text-danger"><i class="bi bi-exclamation-triangle-fill" style="font-size: larger; filter: drop-shadow(var(--bs-danger-bg-subtle) 0 0 5px);"></i></h1>
        <h1>404</h1>
        <p class="text-center">Stránka <code class="bg-body-secondary text-center rounded p-1" >{{ $route.path }}</code> nenalezena.</p>
        <router-link to="/">Zpět Domů</router-link>
    </div>
</template>

<style scoped>

</style>
