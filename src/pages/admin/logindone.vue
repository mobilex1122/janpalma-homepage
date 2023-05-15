<template>
</template>



<script lang="ts">

    type arrstr = string[]
    export default {
        mounted() {
            var result = this.$route.hash.replace("#","").split('&').reduce(function (res: Record<string, string>, item) {
                var parts = item.split('=');
                res[parts[0]] = parts[1];
                return res;
            }, {});
            window.opener.postMessage(result)
            window.close()
        }
    }
    
</script>