<template>
	<div id="user-profile">
		<!--<h1>User Profile {{ id }}</h1>-->
		<h1>{{ getUsersById }}</h1>

		<!--<h4>{{ this.$route.query['friend'] }}</h4>
		<h4>{{ this.$route.query['age'] }}</h4>
		<h4>{{ this.$route.query['kek'] }}</h4>-->
		<button @click="back">Back</button>

		<!--
		<p><strong>Name</strong> {{ user.name }}</p>
		<p><strong>Surname</strong> {{ user.surname }}</p>
		<p><strong>aboutMe</strong> {{ user.aboutMe | readMore(200, '...')}}</p>
		<div v-if="showForm">
			<profile-form :user="user" @save-user="saveUser($event)" @cancel="showForm=false"></profile-form>
		</div>
		<div v-else>
			<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="showForm=true">Edit</button>
		</div>
		-->
	</div>
</template>

<script>
	//import {mapGetters} from 'vuex'
	//import ProfileForm from "./ProfileForm"

	export default {
		//components: {ProfileForm},
		//props: ['user'],
		/*
		props: {
			user: {
				type: Object,
				required: true
			}
		},
		*/
		name: "Profile",
		data() {
			return {
				id: +this.$route.params['id']
			}
		},
		watch: {
			$route(to) {
				this.id = to .params['id']
			}
		},
		/*
		data() {
			return {
				showForm: false
			}
		},
		*/
		filters: {
			readMore(text, limit, suffix){
				return text.substring(0, limit) + suffix
			}
		},
		methods: {
			back() {
				this.$router.push('/users')
			}
		},
		/*
		methods: {
			saveUser(user) {
				this.$emit('save-user', user)
			}
		}
		*/
		computed: {
			getUsersById() {
				return this.$store.getters.getUsersById(this.id)
			}
		}
		/*computed: mapGetters([	//Getters
			'getUsersById'
		])*/
	}
</script>

<style scoped>

</style>