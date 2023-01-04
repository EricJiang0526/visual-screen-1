<template>
	<div class="main-screen">
		<ScreenLayout />
	</div>
</template>

<script setup lang="ts">
import ScreenLayout from '@/components/ScreenLayout/index.vue';
</script>

<style lang="scss" scoped>
.main-screen {
	width: 100%;
	height: 100%;
	overflow: scroll;
	background-color: #4b505f;
	box-sizing: border-box;
}
</style>
