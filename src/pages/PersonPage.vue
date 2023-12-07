<template>
	<div class="persons">
		<div class="persons__body">
			<div class="persons__header header">
				<person-form @add="add" />
			</div>
			<div class="persons__content content">
				<person-list :persons="getPersons" @removePerson="removePerson" />
			</div>
			<div class="persons__footer footer">
				<app-button class="next-btn" @click="$router.push('/products')">Дальше</app-button>
			</div>
		</div>
	</div>
</template>

<script>
import PersonList from '@/components/PersonList.vue'
import PersonForm from '@/components/PersonForm.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
	components: {
		PersonList,
		PersonForm,
	},
	computed: {
		...mapGetters({
			getPersons: 'person/getPersons'
		})
	},
	
	methods: {
		...mapMutations({
			addPerson: 'person/addPerson'
		}),

		add(newPerson) {
			this.addPerson(newPerson)
		},

		// здесь добавлять
		removePerson(person) {
			this.persons = this.persons.filter(p => p.id !== person.id)
		},
	},
}
</script>

<style scoped></style>
