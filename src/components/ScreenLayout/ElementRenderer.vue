<template>
	<div class="element-container" :style="style">
		<component :is="props.params.type" />
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	params: any;
}>();

console.log('ele', props.params);

const style = computed(() => {
	const { width, height, left, top } = props.params;
	console.log(width, height, left, top);

	return {
		width: `${width}px`,
		height: `${height}px`,
		left: `${left}px`,
		top: `${top}px`
	};
});
</script>

<style lang="scss" scoped>
.element-container {
	position: absolute;
}
</style>
