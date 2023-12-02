<template>
    <div class="person-item">
        <div class="person-item__name">{{ person.name }}</div>
        <div class="person-item__rmv-btn rmv-btn">
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
.person-item {
    padding: 15px;
    display: flex;
    justify-content: space-between;
}
.person-item__name {
    /* как-нибудь выделять */
}
</style>