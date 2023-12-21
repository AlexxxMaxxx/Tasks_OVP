import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import router from '@/router/router'
import store from '@/store'
import '@/assets/scss/styles.scss'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components_ from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

const vuetify = createVuetify({
	components_,
	directives,
})

components.forEach(component => app.component(component.name, component))

app.use(router).use(store).use(vuetify).mount('#app')
