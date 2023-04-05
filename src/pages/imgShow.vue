



<script setup lang="ts">
    import Error from './errors.vue'
    let t=""
    
</script>


<template>
    <div v-if="$route.query.file && !$route.query.file.includes('../')">
        <h1>{{ $route.query.file }}</h1>
        <img :src="'/public/img/'+($route.query.file as string)">
    </div>
    <div v-else>
    </div>
</template>

<style scoped>

</style>
