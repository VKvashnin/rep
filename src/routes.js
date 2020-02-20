//router
import VueRouter from 'vue-router'
import Home from './components/Home'
import UsersList from './components/User/List'
import EmployeesList from './components/Employee/List'
import UserProfile from './components/User/Profile'
import Error404 from './components/Support/Error404'

export default new VueRouter({
	routes: [
		{
			path: '/',//http://localhost:8080
			component: Home
		},
		{
			path: '/users',//http://localhost:8080/users
			component: UsersList
		},
		{
			path: '/employees',//http://localhost:8080/users
			component: EmployeesList
		},
		{
			path: '/users/:id',////http://localhost:8080/users/7
			component: UserProfile
		},
		//obyazatelno poslednim
		{
			path: '*',
			component: Error404
		}
	],
	mode: 'history'
})
