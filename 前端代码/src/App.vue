<template>
	<router-view />
</template>

<script>
import { onUnmounted } from '@vue/runtime-core'
	export default {
		name: 'App',
		onUnmounted(){
			this.$store.dispatch('logout')
		}
	}
</script>
<style>
@import './style/elementUI.less';
	html,
	body,
	#app {
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: Microsoft Yahei, Arial, Helvetica, sans-serif;
	}
</style>
