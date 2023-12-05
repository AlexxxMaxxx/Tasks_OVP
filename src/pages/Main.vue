<template>
	<div>
		<h1>Main Page!</h1> 
		
		<!--start example-->
		<hr>
		<!--<h2>{{ $store.state.count }}</h2>-->
		<h2>{{ $store.getters.count}}</h2>
		<button @click="incrementCount">+</button>
		<button @click="decrementCount">-</button>
		<h2>Double Value:</h2>
		<h2>{{ $store.getters.doubleCount}}</h2>
		<button @click="$store.dispatch('asyncMultByFive')">Multiply on five</button>
		<br>
		<hr> <!-- end example-->
		<app-button class="next-btn" @click="$router.push('/persons')"
			>Дальше</app-button
		>
	</div>
</template>

<script>
export default {
	/*start example */
	methods: {
		incrementCount() {
			this.$store.commit({
				type: 'incrementCount',
				dec: 10,
				double_dec: 20
			})
		},
		decrementCount() {
			this.$store.commit('decrementCount', {
				dec: 10,
				double_dec: 20
			})
		},
	},
	/*end example */
}
</script>

<style scoped></style>
