<!--???-->
<template>
	<div id="list">
		<h1>Users List <span class="bg-orange-500">{{ counter }}</span></h1>
		<ul>
			<!--<li v-for="user of userList" :key="user.id">-->
			<li v-for="user of users" :key="user.id">
				<router-link 
					tag="a"
					:to="`/users/${user.id}`"
				>{{ user.name }}</router-link>
				<!--
				<router-link 
					tag="a"
					:to="{
						name:'UserProfile',
						
					}"
				>{{ user.name }}</router-link>
				-->
				<!--{{ user.name }}-->

			</li>
			<!--<div>{{ users }}</div>-->
		</ul>
	</div>
</template>
<script>
	//import {mapState} from 'vuex'
	//import {mapGetters} from 'vuex'
	export default {
		name: 'List',
		methods: {
			getUsers() {
				this.$store.dispatch('getUsers')
			}
		},
		created() {
			this.getUsers()
		},
		computed: {
			counter() {
				return this.$store.state.counter
			},
			
			/*... mapGetters ([
			'getUsers'
			]),*/
			users() {
				return this.$store.getters.users
			}
			/*... mapState ({
				users: 'users'
			})*/
		}
		
	}

</script>