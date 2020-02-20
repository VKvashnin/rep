import Vue from 'vue'
import Vuex from'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		users: [
					{
						name: 'petro',
						surname: 'asdda',
						id: 1,
						age: 15
					},
					{
						name: 'petro2',
						surname: 'asdda2',
						id: 2,
						age: 18
					},
					{
						name: 'petro3',
						surname: 'asdda3',
						id: 3,
						age: 21
					},
					{
						name: 'petro4',
						surname: 'asdda4',
						id: 4,
						age: 24
					},
					{
						name: 'petro5',
						surname: 'asdda5',
						id: 5
					},
					{
						name: 'petro6',
						surname: 'asdda6',
						id: 6
					},
					{
						name: 'petro7',
						surname: 'asdda7',
						id: 7
					},
					{
						name: 'petro8',
						surname: 'asdda8',
						id: 8
					},
					{
						name: 'petro9',
						surname: 'asdda9',
						id: 9
					}
		],
		title: 'Home Page',
		counter: 555
	},
	//n1
	mutations: {
		fillUsers(state, payload) {
			state.users = payload
		}
	},
	//n1
	actions: {
		getUsers(context) {
			//axios.get('https://jsonplaceholder.typicode.com/users')
			axios.get('https://jsonplaceholder.typicode.com/users')
				.then(res => context.commit('fillUsers', res.data))
		}
	},
	getters: {
		title(state/*, getters*/) {
			return state.title.toUpperCase() + ' ' + '- current title'
		},
		getUsers(state) {
			return state.users
		},
		nameSurname(state) {
			return state.users.name + ' ' + state.users.surname
		},
		getUsersById: state => id => {
			return state.users.find(user => user.id === id).name + ' ' + state.users.find(user => user.id === id).surname;
		},
		//n1
		users(state) {
			return state.users
		}
	}
})