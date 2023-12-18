<template>
	<form class="product-form" @submit.prevent>
		<app-input
			class="product-form__input input"
			:class="{ invalid : v$.name.$error }"
			v-model.trim="name"
			type="text"
			placeholder="Название"
		/>
		<app-input
			class="product-form__input input"
			:class="{ invalid: v$.price.$error }"
			v-model="price"
			type="number"
			placeholder="Стоимость"
		/>
		<app-input
			class="product-form__input input"
			:class="{ invalid: v$.amount.$error }"
			v-model="amount"
			type="number"
			placeholder="Количество"
		/>

		<select class="product-form__select" v-model="payer">
			<option
				class="product-form__option"
				v-for="person in persons"
				:value="person"
			>
				{{ person.name }}
			</option>
		</select>

		<form class="product-form__checkbox-form">
			<div class="product-form__title">Кто ел/пил?</div>

			<div class="product-form__content">
				<label class="product-form__checkbox">
					<input
						type="checkbox"
						@change="toggleAll"
						:indeterminate="indeterminate"
						v-model="allChosen"
					/>
					<span>{{ allChosen ? 'Un-choose All' : 'Choose All' }}</span>

					<label class="product-form__checkbox" v-for="person in persons">
						<input type="checkbox" :value="person" v-model="chosenPeople" />
						<span>{{ person.name }}</span>
					</label>
				</label>
			</div>
		</form>

		<app-button 
		class="product-form__add-btn add-btn" 
		:class="{ disabled: hasError }"
		@click="inputValidation">{{
			buttonContent
		}}</app-button>

	</form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, minValue } from '@vuelidate/validators'

export default {
	setup() { return { v$: useVuelidate() } },
	data() {
		return {
			name: '',
			price: 0,
			amount: 0,
			payer: this.persons[0],
			chosenPeople: this.persons,

			allChosen: true,
			indeterminate: false,

			buttonContent: 'Добавить',
			hasError: false,
		}
	},
	validations() {
		return {
			name: {
				required,
				minLength: minLength(3)
			},
			price: {
				required,
				minValue: minValue(1)
			},
			amount: {
				required,
				minValue: minValue(1)
			}
		}
	},
	watch: {
		chosenPeople(newValue) {
			if (newValue.length === 0) {
				this.indeterminate = false
				this.allChosen = false
			} else if (newValue.length === this.persons.length) {
				this.indeterminate = false
				this.allChosen = true
			} else {
				this.indeterminate = true
				this.allChosen = false
			}
		},
	},
	methods: {
		toggleAll() {
			console.log(this.allChosen)
			this.chosenPeople = this.allChosen ? this.persons.slice() : []
		},
		inputValidation() {
			this.v$.$touch()

			if (!this.v$.$error) {
				this.hasError = false;
				this.buttonContent = 'Добавить';
				this.addProduct();
			}
			else if(this.v$.$errors.length >= 3){
				this.hasError = true;
				this.buttonContent = 'Заполните все поля!';
			}
			else  if (this.v$.name.$dirty) {
				this.hasError = true;
				if(this.v$.price.minValue.$invalid) {
					this.buttonContent = 'Бесплатный сыр только в мышеловке! Укажите стоимость.';
				}
				else if(this.v$.amount.minValue.$invalid) {
					this.buttonContent = 'Количество не может быть нулевым!';
				}
				else if(this.v$.name.minLength.$invalid) {
					this.buttonContent = 'Слишком короткое название!';
				}
				else {
					this.buttonContent = 'Обязательное поле!';
				}
			}
		},
		addProduct() {
			this.$emit('add', {
				id: Date.now(),
				name: this.name.charAt(0).toUpperCase() + this.name.toLowerCase().slice(1),
				price: this.price,
				amount: this.amount,
				payer: this.payer,
				chosenPeople: this.chosenPeople,
				total: this.price * this.amount,
			})
			this.name = ''
			this.price = this.amount = 0
			this.payer = this.persons[0]
			this.chosenPeople = []
		},
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
