<template>
	<div class="persons">
		<div class="persons__body">
			<div class="persons__header header">
				<person-form @add="add" />
			</div>
			<div class="persons__content content">
				<person-list :persons="getPersons" @remove="remove" />
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
			addPerson: 'person/addPerson',
			removePerson: 'person/removePerson'
		}),
		/* как я прочла из др. источников, обращаться к Vuex следуют в компонентах,
		загружающих данные (контейнерах). В нашем случае, контейнерами можно считать странички,
		а в компонентах по типу Form/List/Item лучше использовать props и emit,
		что может избавить от проблем, возникающих при их повторном использовании.
		Если я ошибаюсь, буду благодарна за feedback :)  */
		add(newPerson) {
			this.addPerson(newPerson)
		},

		remove(person) {
			this.removePerson(person)
		},
	},
}
</script>

<style scoped></style>
