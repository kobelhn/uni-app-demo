<template>
	<u-navbar :isBack="false" :background="bg === 'gradient' ? background : background2" isFixed :borderBottom="false">
		<slot></slot>
	</u-navbar>
</template>

<script>
	export default {
		props: ['bg'],
		data() {
			return {
				background: {
					backgroundImage: 'linear-gradient(90deg, #FB6B6F 0%, #FF8C8F 100%)'
				},
				background2: {
					background: '#FB6B6F'
				}
			}
		}
	}
</script>

<style>
</style>
