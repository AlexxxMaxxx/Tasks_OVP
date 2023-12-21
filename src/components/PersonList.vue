<template>
	<div class="person-list">
		<div class="person-list__header-list header-list">
			<h2>{{ getHeaderList }}</h2>
		</div>
		<div class="person-list__content-list content-list">
			<person
				v-for="person in persons"
				:person="person"
				:key="person.id"
				@remove="$emit('remove', person)"
			/>
		</div>
	</div>
</template>

<script>
import Person from './PersonItem.vue'
export default {
	components: {
		Person,
	},
	props: {
		persons: {
			type: Array,
			required: true,
		},
	},
	computed: {
		getHeaderList() {
			const amountPersons = this.persons.length
			const modulo = amountPersons % 10

			if (amountPersons) {
				if (
					modulo === 0 ||
					modulo > 4 ||
					(amountPersons > 10 && amountPersons < 15)
				) {
					return amountPersons + ' cытых пользователей'
				} else if (modulo === 1) {
					return amountPersons + ' cытый пользователь'
				} else {
					return amountPersons + ' cытых пользователя'
				}
			} else {
				return 'Кто угощает? Добавим кого-нибудь!'
			}
		},
	},
}
</script>