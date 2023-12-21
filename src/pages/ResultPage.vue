<template>
	<div class="results">
		<div class="results__body">
			<div class="results__header header">
				<h1>Результаты</h1>
			</div>
			<div class="results__content content">
				<div class="results__btns">
				<app-button 
				class="results_select-btn select-btn" 
				@click="whoWhomlist = true"
				:class="{ selected: whoWhomlist }"
					>Кто-кому</app-button>
				<app-button 
				class="results_select-btn select-btn" 
				@click="whoWhomlist = false"
				:class="{ selected : !whoWhomlist }"
					>Кому-кто</app-button>
					</div>
			  <WhoWhomList v-if="whoWhomlist" :persons="getPersons"/>
				<WhomWhoList v-else :persons="getPersons" :whomWho="whomWho"/>
			</div>
			<div class="results__footer footer">
				<app-button class="next-btn" @click="$router.push('/')"
				>Заново</app-button>
			</div>
		</div>
	</div>
</template>

<script>
import WhoWhomList from '@/components/WhoWhomList.vue';
import WhomWhoList from '@/components/WhomWhoList.vue';
import { mapGetters } from 'vuex'
export default {
	data: () => ({
		whomWho: [],
		whoWhomlist: true
	}),
	components: {
		WhoWhomList,
		WhomWhoList
	},
	created() {
		this.getDebts();
	},
	computed: {
		...mapGetters({
			getProducts: 'product/getProducts',
			getPersons: 'person/getPersons'
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
			this.getWhoWhom()
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
		},
		getWhoWhom() {
			this.getPersons.forEach((curPerson) => {
				const len = this.whomWho.push({ whom: curPerson.id, who: [] })
				this.getPersons.forEach((person) => {
					if (person.id !== curPerson.id) {
						const index = person.debts.findIndex(d => d.id === curPerson.id)
						if (index !== -1) {
							this.whomWho[len - 1].who.push({id: person.id, amount: person.debts[index].amount})
						}
					}
				})
			})
			this.whomWho.forEach((ww) => {console.log(ww)})
		}
	},
}
</script>
