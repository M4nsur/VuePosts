<template>
    <form action="" @submit.prevent="onSubmit">
        <div class="formWrapper">
            <input placeholder="название поста" class="inp" v-model="title" type="text">
            <input placeholder="тело поста" class="inp" v-model="body" type="text">
            <ButtonComp :disabled="checkInput"  @click="addPost">Добавить</ButtonComp>
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
                    title: "",
                    body: ""
            }
        },
        computed: {
            checkInput() {
                if(this.title && this.body) {
                    return false
                } else return true
            }
        },
        methods: {
            addPost()  {
                this.$emit("post", {title: this.title, body: this.body})
                this.title = null
                this.body = null
            }
        }
    };

</script>

<style scoped>
    .formWrapper {
        width: 430px;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
    }
    .inp {
        display: block;
        margin-right: 5px;
        border: solid 1.4px rgb(151, 19, 19);
        border-radius: 2px;
        outline: none;
        
    }
</style>