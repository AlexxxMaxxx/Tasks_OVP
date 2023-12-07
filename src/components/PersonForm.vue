<template>
    <form class="person-form" @submit.prevent>
        <app-input class="person-form__input input" v-model="name" type="text" placeholder="Имя" />
        <app-button class="person-form__add-btn add-btn" @click="addPerson">Добавить</app-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: ""
        };
    },
    methods: {
        addPerson() {
            this.$emit('add', {
                id: Date.now(),
                name: this.name
            });
            this.name = ""
        }
    }
}
</script>

<style scoped>
.person-form {
    display: flex;
    gap: 5px;
}

.person-form__input {
    flex-grow: 1;
}
</style>