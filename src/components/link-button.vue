<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ href: string , active_class?: string}>()

</script>

<template>

    <router-link :to="href" class="btn btn-primary" :active-class="active_class"><slot/></router-link>


    
</template>


