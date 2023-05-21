<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ path:string, filenames:string }>()

const count = ref(0)
</script>

<template>
    <div class="headervid-main">
        <div :style="'--videomax:'+ filenames.split(',').length+';'+'animation: change 5s steps('+ filenames.split(',').length +') infinite;'">
            <template v-for="i,index in filenames.split(',')">
                <video :src="path+i" autoplay muted loop></video>
            </template> 
            <video :src="path+filenames.split(',')[0]" autoplay muted loop></video>
        </div>
        
    </div>
</template>

<style scoped>
    .headervid-main {
        left: 0;
        width: 100%;
        aspect-ratio: 5/1;
        overflow: hidden;
        position: relative;
    }
    .headervid-main div {
        --videomax: 1;
        width: max-content;
        position: absolute;
        height: 100%;
    }

    @keyframes change {
        from {
            left: 0;
        }
        to {
            left: calc(-100% * val(--videomax) );
        }
    }
    .headervid-main video {
        position: inline-block;
        top: 0;
        left: 0;
        aspect-ratio: 5/1;
        height: 100%;
        object-fit: cover;
        object-position:center;
    }
</style>
