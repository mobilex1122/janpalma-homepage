<script setup lang="ts">
    import Loading from '@comp/loading.vue';
    import { marked } from 'marked';
</script>

<template>
    <div>
        <h1>Page</h1>
        <Loading/>

        <div>
            <span v-html="parseddata"></span>
        </div>
    </div>
</template>

<script lang="ts">


    export default {
        data() {
            return {
                parseddata: ""
            }
        },

        async mounted () {
            let path = "/doc/main.md"
            if (this.$route.path != "/doc") {
                path = this.$route.path+".md"
            }
            const textraw = await fetch(path)
            let text = await textraw.text()

            text = text.replace('(@/','(/doc/')
            console.log(text);
            
            this.parseddata = marked.parse(text)


        }
    }
</script>

<style scoped>
</style>
