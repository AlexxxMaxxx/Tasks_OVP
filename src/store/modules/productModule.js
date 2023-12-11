export const productModule = {
  state: () => ({
    products: [ /*потом очистить*/
      { id: 1, name: 'Чизбургер', price: 100, amount: 4, idPayer: 1, checkedId: [1, 2], total: 400 },
      { id: 2, name: 'Картошка фри', price: 70, amount: 2, idPayer: 1, checkedId: [2, 3], total: 140 },
      { id: 3, name: 'Сырный соус', price: 40, amount: 2, idPayer: 1, checkedId: [3, 4], total: 80 },
      { id: 4, name: 'Кока-кола', price: 60, amount: 1, idPayer: 1, checkedId: [1, 4], total: 60 },
    ],
  }),
  getters: {
    getProducts(state) {
      return state.products
    },
    getProductsLength(_, getters) {
      // удалить?
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
      state.products = state.products.filter(p => p.id !== product.id);
    }
  },
  namespaced: true
}