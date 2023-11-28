<template>
    <div class="app">
        <person-form @add="addPerson"/>
        <person-list :persons="persons" @remove="removePerson"/>
    </div>
</template>

<script>
import PersonList from '@/components/PersonList.vue';
import PersonForm from '@/components/PersonForm.vue';
export default {
    components: {
        PersonList,
        PersonForm
    },
    data() {
        return {
            persons: [
                { id: 1, name: "Саша" },
                { id: 2, name: "Вика" },
                { id: 3, name: "Вероника" },
                { id: 4, name: "Настя" }
            ]
        };
    },
    methods: {
        addPerson(person) {
            this.persons.push(person);
        },
        removePerson(person) {
            this.persons = this.persons.filter(p => p.id !== person.id);
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 20px;
}
</style>