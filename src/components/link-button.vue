<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ href: string }>()

</script>

<template>

    <router-link :to="href" class="btn btn-primary"><slot/></router-link>


    
</template>


