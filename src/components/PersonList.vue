<template>
	<div class="person-list">
	<div class="person-list__header-list header-list">
			<h3>{{ headerList }}</h3>
	</div>
	<div class="person-list__content-list content-list">
	<person
				v-for="person in persons"
				:person="person"
				:key="person.id"
				@removePerson="$emit('removePerson', person)"
			/>
	</div>
	</div>
	
</template>

<script>
import Person from './PersonItem.vue'
export default {
	data() {
		return {
			headerList: "" /*заменить потом на Кто угощает? Добавим кого-нибудь!*/
		}
	},
	components: {
		Person,
	},
	props: {
		persons: {
			type: Array,
			required: true,
		},
	},
	updated() {
		this.headerList = this.getHeaderList();
	},
	methods: {
		getHeaderList() {
			const amountPersons = this.persons.length;
	
			if (amountPersons) {
				if (amountPersons === 1) {
					return amountPersons + " cытый пользователь!";
				}
				else if (amountPersons > 4) {
					return amountPersons + " cытых пользователей!";
				}
				else {
					return amountPersons + " cытых пользователя!";
				}
			}
			else {
				return "Кто угощает? Добавим кого-нибудь!";
			}
		}
	}
}
</script>

<style scoped>
</style>
