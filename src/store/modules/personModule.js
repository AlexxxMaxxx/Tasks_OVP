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
			// удалить?
			return getters.getPersons.length
		},
	},
	mutations: {
		setPersons(state, persons) {
			// удалить?
			state.persons = persons
		},
		addPerson(state, newPerson) {
			state.persons.push(newPerson)
		},
		removePerson(state, person) {
			state.persons = state.persons.filter(p => p.id !== person.id)
		}
	},
	namespaced: true
}