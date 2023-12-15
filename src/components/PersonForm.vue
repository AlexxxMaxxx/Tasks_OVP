<template>
	<form class="person-form" @submit.prevent>
		<app-input
			class="person-form__input input"
			v-model.trim="name"
			type="text"
			placeholder="Имя"
		/>
		<app-button class="person-form__add-btn add-btn" @click="addPerson"
			>Добавить</app-button
		>
	</form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
//import { minLength, required } from '@vuelidate/validators'

export default {
	setup () { return { v$: useVuelidate() } },
	data() {
		return {
			name: '',
		}
	},
  validations () {
    return {
			name: {
				
			}
    }
  },
	methods: {
		addPerson() {
			this.$emit('add', {
				id: Date.now(),
				name: this.name.charAt(0).toUpperCase() + this.name.toLowerCase().slice(1),
			})
			this.name = ''
		},
	},
}
</script>

<style scoped>
.person-form {
	display: flex;
	gap: 5px;
}

.person-form__input {
	flex-grow: 1;
}
</style>
