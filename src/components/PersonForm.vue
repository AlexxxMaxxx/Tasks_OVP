<template>
    <form @submit.prevent>
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
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 15px;
    margin-bottom: 15px;
    gap: 5px;
}
form > input {
    flex-grow: 1;
}
</style>