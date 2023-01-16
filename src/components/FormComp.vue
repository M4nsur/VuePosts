<template>
    <form action="" @submit.prevent="onSubmit">
        <div class="formWrapper">
            <input class="inp" v-model="post.title" type="text">
            <input class="inp" v-model="post.body" type="text">
            <ButtonComp @click="addPost">Добавить</ButtonComp>
        </div>
    </form>
</template>

<script>
import ButtonComp from "@/components/UI/ButtonComp.vue"
    export default {
        components: {
            ButtonComp
        },
        data() {
            return {
                post: {
                    title: "",
                    body: ""
                }
            }
        },
        methods: {
            addPost() {
                let {title, body} = this.post
                console.log(title, body)
                this.$emit("post", {title, body})

            }
        }
    };

</script>

<style>
    .formWrapper {
        display: flex;
    }
    .inp {
        display: block;
        margin-right: 5px;
    }
</style>