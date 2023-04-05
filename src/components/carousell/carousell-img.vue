
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ src: string, showlink:string, alt?: string}>()


</script>

<template>
    <div class="carousel-item">
        <a :href="src"><img :src="src" class="d-block w-100" :alt="alt"></a>
    </div>
</template>