<template>
    <form class="person-form" @submit.prevent="submit">
        <app-input class="person-form__input input" v-model="name" type="text" placeholder="Имя" />
        <app-button class="person-form__add-btn add-btn" type="submit">Добавить</app-button>
    </form>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {      
            name: ""
        };
    },
    methods: {
        ...mapMutations(['addPerson']),
        submit() {
            this.addPerson({
                id: Date.now(),
                name: this.name
            });
            this.name = "";
        },
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