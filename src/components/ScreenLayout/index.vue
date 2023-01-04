<template>
	<div
		class="screen-canvas"
		:style="canvasStyle"
		@drop="drop"
		@dragenter.prevent
		@dragover.prevent
		@mousemove="handleMouseMove"
		@mouseup.left="handleMouseUp"
	>
		<!-- <ElementRenderer
      v-for="item in screen.getAllElements()"
      :key="item.id"
      :params="item"
    /> -->
		<DragResize
			v-for="item in screen.getAllElements()"
			ref="dragResize"
			:key="item.id"
			style="position: absolute"
			:params="item"
			:active="isActive(item.id)"
		>
			<component :is="item.type" />
		</DragResize>
	</div>
</template>

<script setup lang="ts">
// import ElementRenderer from './ElementRenderer.vue'
import DragResize from './DragResize.vue';
import { computed, ref } from 'vue';
import { useScreenStore } from '@/stores/screen';
import { useMouseStore } from '@/stores/mouse';

const screen = useScreenStore();
const mouse = useMouseStore();

const drop = (e: DragEvent) => {
	const dragData = e.dataTransfer?.getData('text/plain');
	if (dragData) {
		const { offsetX: x, offsetY: y } = e;

		const dragItem = JSON.parse(dragData);
		screen.addNewElement(dragItem.name, { x, y });
	}
};

const canvasStyle = computed(() => {
	return {
		width: '1920px',
		height: '920px'
	};
});

const isActive = (id: string) => {
	return screen.getCurrentElement().id === id;
};

const handleMouseMove = (e: MouseEvent) => {
	console.log('mousemove', e, e.offsetX, e.offsetY);
	mouse.moveMouse(e.offsetX, e.offsetY);
};

const dragResize: any = ref(null);
const handleMouseUp = () => {
	dragResize.value.forEach((item: any) => {
		item.handleMouseUp();
	});
};
</script>

<style lang="scss" scoped>
.screen-canvas {
	position: relative;
}
</style>
