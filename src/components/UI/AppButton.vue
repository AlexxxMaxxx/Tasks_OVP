<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "app-button"
}
</script>

<style scoped>

.btn {
    padding: 5px 10px;
    color: rgb(51, 50, 50);
    border: 2px solid grey;
}
</style>