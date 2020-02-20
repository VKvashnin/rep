import {eventBus} from '../main.js';
export default {
	data(){
		return {
			notify: {
                message: null,
                status: null
            },
            showNotify: false
		}
	},
    created(){
        eventBus.$on('show-notify', (notify) => {
            this.notify = notify
            this.showNotify = true
        })
    }
}