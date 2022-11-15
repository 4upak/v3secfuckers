/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import router from './router'
import store from './store'

// Composables
import { createApp } from '../node_modules/vue'

// Plugins
import { registerPlugins } from './plugins/'
import vuetify from './plugins/vuetify'
import axios from '../node_modules/axios'
import VueAxios from '../node_modules/vue-axios'

const app = createApp(App)

registerPlugins(app)

app
  .use(vuetify)
  .use(router)
  .use(store)
  .use(VueAxios, axios)
  .mount('#app')
