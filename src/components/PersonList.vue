<template>
	<div v-if="persons.length">
		<!--v-show="persons.length"-->
		<h3>Участники</h3>
		<person
			v-for="person in persons"
			:person="person"
			:key="person.id"
			@remove="$emit('remove', person)"
		/>
	</div>
	<h3 v-else>Кто угощает?<br />Добавим кого-нибудь!</h3>
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
}
</script>

<style scoped></style>
