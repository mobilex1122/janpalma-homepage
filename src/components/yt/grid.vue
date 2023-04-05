
<script setup lang="ts">
import { ref } from 'vue'
import linkButton from '@comp/link-button.vue';

//defineProps<{ grid}>()


</script>

<template>
    <div class="yt-grid">
        <slot/>
    </div>
        

</template>

<style lang="scss">


    .yt-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(20rem,30rem));
        grid-template-rows: auto-fit;
        grid-gap: 10px;
        align-items: baseline;
        justify-content: center;
    }
</style>