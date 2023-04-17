
<script setup lang="ts">
import { ref } from 'vue'
import linkButton from '@comp/link-button.vue';
import { state } from '../../props';

defineProps<{ src: string, alt?: string}>()


</script>

<template>
    <div class="carousel-item w-100 bg-white position-relative" style="isolation: isolate;">
        <img :src="src" class="d-block w-100" style="object-fit: cover; aspect-ratio: 16/9; position: absolute; inset: 0%; z-index: -2;" :alt="alt">
        <div class="carousell-bg" :class="{'blur-carousell': state.blur}" style=""></div>
        <img :src="src" class="d-block w-100" style="object-fit: contain; aspect-ratio: 16/9;" :alt="alt">

    </div>
</template>


<style>
    .carousell-bg {
        backdrop-filter: none;
        width: 100%; 
        aspect-ratio: 16/9; 
        position: absolute; 
        inset: 0; z-index: -1;
        background-color: #000000c7;
    }
    .blur-carousell {
        backdrop-filter: blur(10px);
        width: 100%; 
        aspect-ratio: 16/9; 
        position: absolute; 
        inset: 0; z-index: -1;
        background-color: #00000073;
    }

    
    @media (max-width: 575.98px) {
        .blur-carousell {
        backdrop-filter: none;
            background-color: #000000c7;
        }
    }
    
</style>