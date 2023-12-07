<template>
    <div class="person-item">
        <div class="person-item__name">{{ person.name }}</div>
        <app-button class="person-item__rmv-btn rmv-btn" @click="$emit('remove', person)">Удалить</app-button>
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