<template>
	<div>
		<person-form @add="addPerson" />
		<person-list :persons="persons" @remove="removePerson" />
		<app-button @click="$router.push('/products')">Дальше</app-button>
	</div>
</template>

<script>
import PersonList from '@/components/PersonList.vue'
import PersonForm from '@/components/PersonForm.vue'
export default {
	components: {
		PersonList,
		PersonForm,
	},
	data() {
		return {
			persons: [
				{ id: 1, name: 'Саша' },
				{ id: 2, name: 'Вика' },
				{ id: 3, name: 'Вероника' },
				{ id: 4, name: 'Настя' },
			],
		}
	},
	methods: {
		addPerson(person) {
			this.persons.push(person)
		},
		removePerson(person) {
			this.persons = this.persons.filter(p => p.id !== person.id)
		},
	},
}
</script>

<style scoped></style>
