<template>
    <div class="conteiner">
        <FormComp></FormComp>
    </div>
</template>

<script>
import FormComp from "@/components/FormPost.vue"
    export default {
        components: {
            FormComp
        }
    }
</script>

<style>
    .conteiner {
        width: 700px;
        margin: 0 auto;
        padding: 10px;
    }
</style>