<template>
    <div class="person">
        <div>{{ person.name }}</div>
        <div class="person__btns">
            <app-button @click="$emit('remove', person)">Удалить</app-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        person: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.person {
    padding: 15px;
    margin-top: 15px;
    border: 2px solid grey;
    display: flex;
    justify-content: space-between;
}
</style>