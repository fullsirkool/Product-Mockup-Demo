import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'
import ProductStore from './store/ProductStore'

createApp(App)
.use(ProductStore)
// .use(router)
.mount('#app')
