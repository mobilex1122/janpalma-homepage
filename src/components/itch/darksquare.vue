<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ link: string, title:string}>()


</script>

<template>

  <div class="card h-100">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text position-relative">
        <slot>No description</slot>
      </p>
    </div>
    <a :href="link" class="btn btn-primary border-1 border-start-0 border-bottom-0 border-end-0 card-footer" target="_blank">Zobrazit na Itch.io</a>
  </div>
</template>

<style scoped>
  .itchembed {
    border: solid var(--bs-border-width);
    border-radius: var(--bs-border-radius);
  }
</style>
