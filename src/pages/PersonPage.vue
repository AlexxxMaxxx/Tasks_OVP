<template>
	<div class="persons">
		<div class="persons__body">
			<div class="persons__header header">
				<person-form />
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
import { mapGetters } from 'vuex'
export default {
	components: {
		PersonList,
		PersonForm,
	},
	computed: mapGetters(['getPersons']),
	methods: {
		removePerson(person) {
			this.persons = this.persons.filter(p => p.id !== person.id)
		},
	},
}
</script>

<style scoped></style>
