<template>
    <FormComp @post="addPost"/>
    <div class="postsWrapper">
        <div class="post" v-for="(item, index) in posts" :key="item.title">  
            <div>
                <h1>{{ item.title}}</h1>
                {{ item.body }}
            </div>
            <ButtonComp @click="deleteNote(index)">Удалить</ButtonComp>
        </div>
    </div>   
</template>

<script>
import FormComp from "./FormComp.vue"
export default {
    components: {
        FormComp,
    },
    data() {
        return {
            posts: []
        }
    },
    methods: {
        addPost(post) {
                this.posts.push(post)
        },
        deleteNote(index){
            this.posts.splice(index, 1)
        }
    }
}
</script>

<style scoped>
    .post {
        display: flex;
        justify-content: space-between;
        width: 430px;
        padding: 3px;
        margin: 0 auto;
        margin-top: 5px;
        border: solid 1.4px rgb(151, 19, 19);
        word-break: break-all;
    }
    h1 {
        font-size: 20px;
    }
</style>