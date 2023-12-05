import { createStore } from 'vuex'
/* example */
export default createStore({
	state: () => ({
		count: 0,
	}),
	mutations: {
		incrementCount(state, step) {
			state.count += step.dec
		},
		decrementCount(state, step) {
			state.count -= step.double_dec
		},
		multByFive (state) {
			state.count *= 5
		}
	},
	getters: {
		count(state) {
			return state.count
		},
		doubleCount(_, getters) {
			return getters.count * 2
		},
	},
	actions: {
		asyncMultByFive(context) {
			setTimeout(() => {
				context.commit('multByFive')
			}, 1000)
		},
	},
	/*,
	modules: {},*/
})
