import { createStore } from 'vuex';
import { personModule } from '@/store/modules/personModule'

export default createStore({
	modules: {
		person: personModule,
	},
})
