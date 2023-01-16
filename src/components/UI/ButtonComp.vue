<template>
    <button class="uiBtn">
        <slot></slot>
    </button>
</template>

<style>
    .uiBtn {
        background: none;
        color: rgb(151, 19, 19);
        border: solid 1.4px rgb(151, 19, 19);
        border-radius: 2px;
    }
</style>