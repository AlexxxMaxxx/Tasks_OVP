<template>
	<div class="persons">
		<div class="persons__body">
			<div class="persons__header header">
				<person-form :persons="getPersons" @add="add" />
			</div>
			<div class="persons__content content">
				<person-list :persons="getPersons" @remove="remove" />
			</div>
			<div class="persons__footer footer">
				<app-button
					class="next-btn"
					:class="{ disabled: hasError }"
					@click="allowTransition"
					>{{ buttonContent }}</app-button
				>
			</div>
		</div>
	</div>
</template>

<script>
import PersonList from '@/components/PersonList.vue'
import PersonForm from '@/components/PersonForm.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
	data() {
		return {
			buttonContent: 'Добавить продукты',
			hasError: false, // later changed on true, initial length = 0
		}
	},
	components: {
		PersonList,
		PersonForm,
	},
	computed: {
		...mapGetters({
			getPersons: 'person/getPersons',
			getPersonsLength: 'person/getPersonsLength',
		}),
	},

	methods: {
		...mapMutations({
			addPerson: 'person/addPerson',
			removePerson: 'person/removePerson',
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

		allowTransition() {
			const len = this.getPersonsLength
			this.hasError = true

			if (len === 0) {
				this.buttonContent = 'Нет тела, нет дела! Добавьте кого-нибудь!'
			} else if (len === 1) {
				this.buttonContent =
					'Кушать в одиночестве не хорошо :( Добавьте кого-нибудь еще!'
			} else {
				this.buttonContent = 'Добавить продукты'
				this.$router.push('/products')
				this.hasError = false
			}
		},
	},
}
</script>
