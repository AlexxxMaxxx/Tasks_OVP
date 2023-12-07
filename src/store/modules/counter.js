export const counter = {
	state: () => ({
		count: 0,
	}),
	mutations: {
		increment(state, step) {
			state.count += step
		},
		decrement(state, step) {
			state.count -= step.dec
		},

		multByFive(state) {
			state.count *= 5
		},
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
		asyncMultByFive({ commit }) {
			setTimeout(() => {
				commit('multByFive')
			}, 1000)
		},
	},
}