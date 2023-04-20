<script setup lang="ts">
defineProps<{ title:string,id:string,parent:string}>()
</script>

<template>
    <div v-if="parent" class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + id" aria-expanded="true" :aria-controls="title">
                <span v-html="title"></span>
            </button>
        </h2>
        <div :id="id" class="accordion-collapse collapse" :data-bs-parent="'#'+parent">
            <div class="accordion-body">
                <slot></slot>
            </div>
        </div>
    </div>
    <div v-else>
        <h2>No parent set</h2>
    </div>
</template>