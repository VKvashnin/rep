<template>
    <div id="app">
<!--5-->
        <router-link active-class="font-bold" exact to="/">Home</router-link> <!--menu links-->

        <router-link active-class="font-bold" to="/users">User List</router-link> <!--menu links-->
         <router-link active-class="font-bold" to="/employees">Employees</router-link> <!--menu links-->

        <router-view></router-view> <!--choosen component -->

       <!--
       <div class="bg-green-400">
            <h2>Hello, {{ user.name | filter}}</h2>
        </div>
        <notification v-if="showNotify" :message="notify.message" :status="notify.status" @cancel="showNotify=false"></notification>
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <user-profile :user="user" @save-user="user=$event"></user-profile>
        -->
    </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import UserProfile from './components/User/Profile.vue'
//import Notification from './components/Support/Notification'
//import notifier from './mixins/notifier'

export default {
    name: 'app',
    //mixins: [notifier],
    //components: {
        //HelloWorld, UserProfile, Notification
    //},
    data() {
        return {
            user: {
                name: 'John',
                surname: 'Doe',
                aboutMe: 'asfgdafsasddsasdf asfgdafsasddsasdf asfgdafsasddsasdf asfgdafsasddsasdf asfgdafsasddsasdf asfgdafsasddsasdf asfgdafsasddsasdf asfgdafsasddsasdf asfgdafsasddsasdf asfgdafsasddsasdf asfgdafsasddsasdf asfgdafsasddsasdf asfgdafsasddsasdf asfgdafsasddsasdf'
            }
        }
    }
}
</script>

<style src="./assets/css/tailwind.css"></style>
