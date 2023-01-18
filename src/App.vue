<template>
    <div class="conteiner">
        <Posts/>
    </div>
</template>

<script>
import Posts from "@/components/Posts.vue"
    export default {
        components: {
            Posts
        }
    }
</script>

<style scoped>
    .conteiner {
        width: 700px;
        margin: 0 auto;
        padding: 10px;
    }
</style>