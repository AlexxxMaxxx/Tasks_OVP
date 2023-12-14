export const productModule = {
	state: () => ({
		products: [
			/*потом очистить*/
			{
				id: 1,
				name: 'Чизбургер',
				price: 100,
				amount: 4,
				payer: { id: 1, name: 'Саша' },
				chosenPeople: [
					{ id: 2, name: 'Вика' },
					{ id: 4, name: 'Настя' },
				],
				total: 400,
			},
			{
				id: 2,
				name: 'Картошка фри',
				price: 70,
				amount: 2,
				payer: { id: 1, name: 'Саша' },
				chosenPeople: [
					{ id: 1, name: 'Саша' },
					{ id: 3, name: 'Вероника' },
				],
				total: 140,
			},
			{
				id: 3,
				name: 'Сырный соус',
				price: 40,
				amount: 2,
				payer: { id: 1, name: 'Саша' },
				chosenPeople: [
					{ id: 1, name: 'Саша' },
					{ id: 3, name: 'Вероника' },
				],
				total: 80,
			},
			{
				id: 4,
				name: 'Кока-кола',
				price: 60,
				amount: 1,
				payer: { id: 1, name: 'Саша' },
				chosenPeople: [
					{ id: 2, name: 'Вика' },
					{ id: 4, name: 'Настя' },
				],
				total: 60,
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
