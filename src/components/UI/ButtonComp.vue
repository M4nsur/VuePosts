<template>
    <button class="uiBtn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "ButtonComp"
    }
</script>

<style scoped>
    .uiBtn {
        background: none;
        color: rgb(151, 19, 19);
        border: solid 1.4px rgb(151, 19, 19);
    }
</style>