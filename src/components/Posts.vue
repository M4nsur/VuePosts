<template>
    <FormComp @post="addPost"/>
    <div class="postsWrapper">
        <div class="post" v-for="item in posts" :key="item.title">  
            <p>{{ item.title}}</p>
            {{ item.body }}
        </div>
    </div>
</template>

<script>
import FormComp from "./FormComp.vue"
export default {
    components: {
        FormComp
    },
    data() {
        return {
            posts: []
        }
    },
    methods: {
        addPost(post) {
            this.posts.push(post)
        }
    }
}
</script>

<style>
    
</style>