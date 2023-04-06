
<script setup lang="ts">
import { ref } from 'vue'
import linkButton from '@comp/link-button.vue';

defineProps<{ width?:string, id:string, video:string ,title:string}>()


</script>

<template>
    <button type="button" class="position-relative btn border-primary border-2 m-1 p-0 overflow-hidden" :style="'width:'+ width+';'" data-bs-toggle="modal" :data-bs-target="'#'+id">
        <img style="width: 100%; object-fit: cover; aspect-ratio: 16/9;" class="m-0 p-0" :src="'https://img.youtube.com/vi/'+video+'/hqdefault.jpg'" alt="">
        <b class="position-absolute text-white bottom-0 start-0 w-100 pb-2" style="filter: drop-shadow(black 0 0px 4px);">{{ title }}</b>
        <i class="position-absolute top-50 start-50 translate-middle z-3 bi bi-play" style="font-size: 8rem; filter: drop-shadow(black 0 0 5px); color: white;"></i>
    </button>

    <!-- Modal -->
    <div class="modal modal-xl fade" :id=id tabindex="-1" :aria-labelledby=title aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ title }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <iframe class="w-100" style="aspect-ratio: 16/9;" :src="'https://www.youtube-nocookie.com/embed/'+video" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>  
</template>
