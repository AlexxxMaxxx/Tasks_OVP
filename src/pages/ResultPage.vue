<template>
	<div class="results">
		<div class="results__body">
			<div class="results__header header">
				<h1>Результаты</h1>
			</div>
			<div class="results__content content">
				
				<div v-for="person in getPersons">
					{{ person.name + ' должен'}}
					<div v-for="p in person.debts">
						{{ getPersons.find(pers => pers.id === p.id).name +
						' - ' + p.amount + ' рублей'}}
					</div> 
				</div>

			</div>
			<div class="results__footer footer">
				<app-button class="next-btn" @click="$router.push('/')"
				>Заново</app-button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	created() {
		this.getDebts();
	},
	computed: {
		...mapGetters({
			getProducts: 'product/getProducts',
			getPersons: 'person/getPersons',
		}),
	},
	methods: {
		getDebts() {
			this.getProducts.forEach((product) => {
				const chosenPeople = product.chosenPeople
				const pricePerson = product.total / chosenPeople.length;
				chosenPeople.forEach((chosenPerson) => {
					const person = this.getPersons.find(p => p.id === chosenPerson.id)
					const payer = product.payer.id
					if(payer !== person.id)
						person.debts.push({ id: payer, amount: pricePerson })
				})		
			});
			this.checkDebts()
		},
		checkDebts() {
			this.getPersons.forEach((person) => {
				person.debts.forEach((debt, ind) => {
					const debtPerson = this.getPersons.find(p => p.id === debt.id)
					const index = debtPerson.debts.findIndex(d => d.id === person.id)
					if (index !== -1) {
						const diff = person.debts[ind].amount - debtPerson.debts[index].amount
						if (diff < 0) {
							person.debts.splice(ind, 1)
							debtPerson.debts[index].amount = -diff
						}
						else if (diff > 0) {
							debtPerson.debts.splice(index, 1)
							person.debts[ind].amount = diff
						}
						else {
							person.debts.splice(ind, 1)
							debtPerson.debts.splice(index, 1)
						}
					}
				})
			})
		}
	}
}
</script>

<style scoped></style>
