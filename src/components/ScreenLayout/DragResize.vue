<template>
	<div class="resizer-main" :style="baseStyle">
		<div v-if="active" class="dots-wrapper">
			<div
				v-for="dot in dotList"
				:key="dot.key"
				class="drag-dot"
				:style="{
					left: `${dot.left}px`,
					top: `${dot.top}px`
				}"
				@mousedown.left="handleMouseDown(dot.key, $event)"
			/>
		</div>
		<slot />
	</div>
</template>

<script setup lang="ts">
import { computed, watch, ref } from 'vue';
import { useScreenStore } from '@/stores/screen';
import { useMouseStore } from '@/stores/mouse';

const props = defineProps<{
	params: any;
	active: boolean;
}>();

const baseStyle = computed(() => {
	return {
		width: `${props.params.width}px`,
		height: `${props.params.height}px`,
		left: `${props.params.left}px`,
		top: `${props.params.top}px`
	};
});

const screen = useScreenStore();
const mouse = useMouseStore();

const dotList = computed(() => {
	const { width, height } = props.params;
	const dotRad = 4;
	return [
		{
			key: 'top-left',
			left: 0,
			top: 0,
			drag: (x: number, y: number) => {
				// console.log(x, y);

				screen.updateCurrentElement({
					left: x,
					top: y
				});
				console.log(screen.getCurrentElement());
			}
		},
		{
			key: 'top-mid',
			left: width / 2,
			top: 0
		},
		{
			key: 'top-right',
			left: width,
			top: 0
		},
		{
			key: 'right-mid',
			left: width,
			top: height / 2
		},
		{
			key: 'bot-right',
			left: width,
			top: height
		},
		{
			key: 'bot-mid',
			left: width / 2,
			top: height
		},
		{
			key: 'bot-left',
			left: 0,
			top: height
		},
		{
			key: 'left-mid',
			left: 0,
			top: height / 2
		}
	].map((item) => ({
		key: item.key,
		left: item.left - dotRad,
		top: item.top - dotRad,
		drag: item.drag || (() => {})
	}));
});

const activeDot = ref('');

const handleMouseDown = (key: string, e: MouseEvent) => {
	console.log('e', e);
	activeDot.value = key;
};

watch(
	() => mouse.x,
	() => {
		if (activeDot.value) {
			const dot = dotList.value.find((d) => d.key === activeDot.value);
			dot?.drag(mouse.x, mouse.y);
		}
	}
);

const handleMouseUp = () => {
	activeDot.value = '';
	console.log('mouseup');
};
defineExpose({
	handleMouseUp
});
</script>

<style lang="scss" scoped>
.resizer-main {
	border: 1px solid #fff;
	.dots-wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		.drag-dot {
			width: 8px;
			height: 8px;
			background: #fff;
			border: 1px solid #6c6c6c;
			box-shadow: 0 0 2px #bbb;
			position: absolute;
		}
	}
}
</style>
