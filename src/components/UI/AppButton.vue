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
    background: none;
    color: grey;
    border: 2px solid grey;
}
</style>