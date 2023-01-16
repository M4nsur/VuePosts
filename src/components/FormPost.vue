<template>
    <form action="" @submit.prevent="onSubmit" >
        <div class="formWrapper">
            <input class="inp" v-model="postTitle" type="text">
            <input class="inp" v-model="PostText" type="text">
            <ButtonComp>Добавить</ButtonComp>
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
                postTitle: "",
                PostText: ""
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