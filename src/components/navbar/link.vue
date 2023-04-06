<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ to:string, class:string }>()

</script>

<template>
    <li class="nav-item"  :class="class" >
        <a class="nav-link" target="_blank" :href=to>
            <slot/>
        </a>
    </li>
</template>