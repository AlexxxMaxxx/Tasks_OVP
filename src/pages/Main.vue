<template>
	<div>
		<h1>Main Page!</h1>

		<!--start example
		<h2>{{ $store.state.count }}</h2>
		<h2>{{ $store.getters.count }}</h2>

		<h2>{{ count }}</h2>
		<button @click="incrementCount">+</button>
		<button @click="decrementCount">-</button>
		<h2>Double Value:</h2>
		<h2>{{ $store.getters.doubleCount }}</h2>
		<button @click="asyncMultByFive">
			Multiply on five
		</button>

		end example-->
		<app-button class="next-btn" @click="$router.push('/persons')"
			>Дальше</app-button
		>
	</div>
</template>

<script>
/*start example
import { mapActions, mapMutations, mapGetters } from 'vuex';*/

export default {
	/*start example
	methods: {
		...mapMutations(['increment', 'decrement']),
		...mapActions(['asyncMultByFive']),

		incrementCount() {
			this.increment(10);
		},
		decrementCount() {
			this.decrement({
				dec: 10,
				double_dec: 20
			})
		},
	},
	computed: mapGetters(['count']),
	end example */
}
</script>

<style scoped></style>
