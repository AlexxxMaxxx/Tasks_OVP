<template>
    <form @submit.prevent>
        <h4>Добавление человека</h4>
        <app-input v-model="person.name" type="text" placeholder="Имя"/>
        <app-button class="btn" @click="addPerson">Добавить</app-button>
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
            this.$emit("add", this.person);
            this.person = {
                name: ""
            }
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
</style>