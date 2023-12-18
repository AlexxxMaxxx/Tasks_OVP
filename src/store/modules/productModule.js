export const productModule = {
	state: () => ({
		products: [
			/*потом очистить*/
			{
				id: 1,
				name: 'Вино',
				price: 500,
				amount: 3,
				payer: { id: 4, name: 'Саша' },
				chosenPeople: [
					{ id: 1, name: 'Настя' },
					{ id: 2, name: 'Вероника' },
					{ id: 3, name: 'Вика' },
				],
				total: 1500,
			},
			{
				id: 2,
				name: 'Пиво',
				price: 300,
				amount: 1,
				payer: { id: 4, name: 'Саша' },
				chosenPeople: [
					{ id: 4, name: 'Саша' }
				],
				total: 300,
			},
			{
				id: 3,
				name: 'Суши',
				price: 560,
				amount: 4,
				payer: { id: 1, name: 'Настя' },
				chosenPeople: [
					{ id: 1, name: 'Настя' },
					{ id: 2, name: 'Вероника' },
					{ id: 3, name: 'Вика' },
					{ id: 4, name: 'Саша' },
				],
				total: 2240,
			},
			{
				id: 4,
				name: 'Десерт',
				price: 500,
				amount: 2,
				payer: { id: 2, name: 'Вероника' },
				chosenPeople: [
					{ id: 2, name: 'Вероника' },
					{ id: 3, name: 'Вика' },
				],
				total: 1000,
			},
			{
				id: 5,
				name: 'Корм',
				price: 400,
				amount: 1,
				payer: { id: 5, name: 'Кодя' },
				chosenPeople: [
					{ id: 5, name: 'Кодя' },
				],
				total: 400,
			},
		],
	}),
	getters: {
		getProducts(state) {
			return state.products
		},
		getProductsLength(_, getters) {
			return getters.getProducts.length
		},
	},
	mutations: {
		setProducts(state, products) {
			// удалить?
			state.products = products
		},
		addProduct(state, newProduct) {
			state.products.push(newProduct)
		},
		removeProduct(state, product) {
			state.products = state.products.filter(p => p.id !== product.id)
		},
	},
	namespaced: true,
}
