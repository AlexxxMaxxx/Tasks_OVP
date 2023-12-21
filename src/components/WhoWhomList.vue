<template>
	<div class="who-whom-list list">
		<div class="whom-who-list__content-list content-list">
			<div class="who-whom-list__item list__item" v-for="person in persons">
				<h3 class="who-whom-name name">{{ person.name + ' должен' }}</h3>
				<div v-if="person.debts.length" v-for="person in person.debts">
					<p>
						{{
							persons.find(p => p.id === person.id).name.slice(0, -1) +
							'е' +
							' - ' +
							person.amount +
							' рублей'
						}}
					</p>
				</div>
				<div v-else>
					<p>Никому ничего не должен! Живет как хочет!</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		persons: {
			type: Array,
			required: true,
		},
	},
}
</script>
