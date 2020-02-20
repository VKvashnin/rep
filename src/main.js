import Vue from 'vue'
import App from './App.vue'
import colored from './directives/colored'
//router
import VueRouter from 'vue-router'
import router from './routes'

//store
import store from './store'

import axios from 'axios'

Vue.prototype.$http = axios

Vue.use(VueRouter)
//router

Vue.config.productionTip = false

Vue.filter('filter', function(str){
	return str.toUpperCase()
})
//vue.filte('uppercase', str => str.toUpperCase())

Vue.directive('colored', colored)

export const eventBus = new Vue()

new Vue({
	render: h => h(App),
	store: store,// store
	router// router: router
}).$mount('#app')
