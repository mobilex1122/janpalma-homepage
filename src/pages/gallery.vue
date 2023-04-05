

<script setup lang="ts">
    import carousellMain from '@comp/carousell/carousell-main.vue';
    import carousellImg from '@comp/carousell/carousell-img.vue';
</script>

<template>
    <h1>Galerie</h1>
    
    <carousellMain id="test">
        <carousellImg src="public/img/none.png" alt="ss" class="active" />
        <carousellImg src="public/img/none.png" alt="ss" />
        <carousellImg src="public/img/none.png" alt="ss" />
    </carousellMain>
</template>

<style scoped>

</style>
