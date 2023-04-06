<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ to: string }>()

</script>

<template>
    <li class="nav-item">
        
        <router-link :to="to" class="nav-link" active-class="active"><slot/></router-link>
    </li>

    
</template>


