import { createStore } from 'vuex';
import { personModule } from '@/store/modules/personModule';
import { productModule } from '@/store/modules/productModule';

export default createStore({
	modules: {
		person: personModule,
		product: productModule
	},
	// возможно не стоит делить на два модуля,
	// а сделать 1 - функционал вообще чем-то отличается?
})
