<!--???-->
<template>
	<div id="home">
		<h1>{{ title }}</h1>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	//import {mapGetters} from 'vuex'	//Getters
	export default {
		name: 'Home',
		/*computed: {
			title() {
				return this.$store.getters.title
			}
		}*/
		computed: mapState({
			title: 'title'
			//title: state => state.title
		}),
		/*computed: mapGetters([	//Getters
			'title'
		])*/
	}

</script>
