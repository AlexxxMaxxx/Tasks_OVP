<template>
    <form class="person-form" @submit.prevent>
        <app-input class="person-form__input input" v-model="person.name" type="text" placeholder="Имя" />
        <app-button class="person-form__add-btn add-btn" @click="addPerson">Добавить</app-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            person: {
                name: ""
            }
        }
    },
    methods: {
        addPerson() {
            this.person.id = Date.now();
            this.$emit("addPerson", this.person);
            this.person = {
                name: ""
            }
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