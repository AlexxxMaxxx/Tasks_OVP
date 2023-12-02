<template>
	<div class="persons">
		<div class="persons__body">
			<!--???-->
			<div class="persons__header">
				<person-form @add="addPerson" />
			</div>
			<div class="persons__content">
				<person-list :persons="persons" @remove="removePerson" />
			</div>
			<div class="persons__footer">
				<app-button @click="$router.push('/products')">Дальше</app-button>
			</div>
		</div>
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

<style scoped>
.persons__body {
	width: 50%;
	height: 100%;
	min-height: 400px;
	margin: 0 auto;
	background-color: rgba(192, 172, 172, 0.349);

	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.persons__header {
	padding: 15px;
	background-color: rgb(134, 127, 140);
}
.persons__content {
	/* при добавлении scss сделать, чтобы высота изменялась от 
	кол-ва элементов */
	padding: 15px;
	background-color: rgb(189, 184, 193);
}
.persons__footer {
	padding: 15px;
	background-color: rgb(231, 227, 234);
}
</style>
