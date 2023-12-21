export const personModule = {
	state: () => ({
		persons: [
			/*потом очистить*/
			{
				id: 1,
				name: 'Настя',
				debts: [],
				/*	debts: [{
					id: 2,
					amount: 500
				}, {
					id: 3,
					amount: 200
				}] */
			},
			{ id: 2, name: 'Вероника', debts: [] },
			{ id: 3, name: 'Вика', debts: [] },
			{ id: 4, name: 'Саша', debts: [] },
			{ id: 5, name: 'Кодя', debts: [] },
		],
	}),
	getters: {
		getPersons(state) {
			return state.persons
		},
		getPersonsLength(_, getters) {
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
		},
	},
	namespaced: true,
}
