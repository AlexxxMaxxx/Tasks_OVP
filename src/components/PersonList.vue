<template>
	<div class="person-list">
	<div class="person-list__header">
			<h3 v-show="persons.length == false">Кто угощает?<br />Добавим кого-нибудь!</h3>
			<h3 v-show="persons.length === 1"> {{ persons.length }} cытый пользователь</h3>
			<h3 v-show="persons.length > 1 && persons.length < 5">{{ persons.length }} cытых пользователя</h3>
			<h3 v-show="persons.length > 4">{{ persons.length }} cытых пользователей</h3>
	</div>
	<div class="person-list__content">
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
}
</script>

<style scoped>
.person-list__header {
	margin-bottom: 15px;
}
.person-list__content{
	width: 100%;
	height: 300px; /* сделать вычисляемой, чтобы не обрезались item */
	overflow-y: scroll;
 /* изменить стили скролла */
}
.person-list__content > * {
	border: 2px solid grey;
	margin: 0px 5px 15px 0px;
}
</style>
