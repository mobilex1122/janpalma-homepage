<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ id: string}>()


</script>

<template>
    <div :id=id class="carousel slide">
        <div class="carousel-inner">
            <slot/>
        </div>
        <button class="carousel-control-prev" type="button" :data-bs-target="'#'+id" data-bs-slide="prev">
            <span style="font-size: 2rem;">
                <i class="bi bi-chevron-compact-left m-0 p-0" style="color: white;  font-size: larger;"></i>
            </span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" :data-bs-target="'#'+id" data-bs-slide="next">
            <span style="font-size: 2rem;">
                <i class="bi bi-chevron-compact-right m-0 p-0" style="color: white;  font-size: larger;"></i>
            </span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style>
    .carousel-control-prev {
        background: linear-gradient(90deg,rgba(0, 0, 0, 1),rgba(0, 0, 0, 0))
    }
    .carousel-control-next {
        background: linear-gradient(-90deg,rgba(0, 0, 0, 1),rgba(0, 0, 0, 0))
    }
</style>