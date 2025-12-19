import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './style.css'
import ClickOutside from './composables/clickOutside'

createApp(App)
  .directive('click-outside', ClickOutside)
  .use(router)
  .mount('#app')
