<template>
	<div id="list-employees">
		<h1>List Employees</h1>
		<ul>
			<li
				v-for="employee in employees"
				:key="employee.id"
			>{{ employee.employee_name }}</li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
        name: "List",
        data() {
            return {
                employees: []
            }
        },
        methods: {
            getEmployees() {
                axios.get('http://dummy.restapiexample.com/api/v1/employees')
                    .then(res => {
                        this.employees = res.data.data
                    })
                    .catch(e => {
                        /* eslint-disable no-console */
                        console.log(e);
                        /* eslint-enable no-console */
                    })
            }
        },
        created() {
            this.getEmployees()
        }
    }
</script>