export default {
	bind(el, binding){
		if (binding.arg == 'background') {
			setBackground(el, binding)
		}
	},
	update(el, binding) {
		if(binding.arg == 'background'){
			setBackground(el, binding)
		}
	}
}

function setBackground(el, binding) {
	if(binding.arg == 'background') {
		el.style.backgroundcolor = binding.value
	}
}