<template>
	<transition name="fade">
		<div v-if="show" class="preloader">
			<div class="logo"></div>
			<p>Добро пожаловать!</p>
			<div class="circles">
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
				<div class="circle"></div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
  name: 'preloader',
	data(){
		return {
			show: true
		}
	},
	mounted(){
		if(this.show) this.showToggle()
	},
	methods: {
		showToggle(){
			setTimeout(() => {
				this.show = false
			}, 700)
		}
	}
}
</script>

<style scoped>
</style>
