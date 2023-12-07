export const personModule = {
	state: () => ({
		persons: [
			/*потом очистить*/
			{ id: 1, name: 'Саша' },
			{ id: 2, name: 'Вика' },
			{ id: 3, name: 'Вероника' },
			{ id: 4, name: 'Настя' },
		],
	}),
	getters: {
		getPersons(state) {
			return state.persons
		},
		getPersonsLength(_, getters) {
			// оно мне надо?? getters?
			return getters.getPersons.length
		},
	},
	mutations: {
		setPersons(state, persons) {
			// оно мне надо?
			state.persons = persons
		},
	},
	actions: {},
}