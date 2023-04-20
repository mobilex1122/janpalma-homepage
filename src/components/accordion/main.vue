<script setup lang="ts">
defineProps<{ id:string}>()
</script>

<template>
    <div class="accordion" :id="id">
        <slot/>
    </div>
</template>