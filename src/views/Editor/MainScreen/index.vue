<template>
  <div
    class="main-screen"
    @drop="drop"
    @dragenter.prevent
    @dragover.prevent
  />
</template>

<script setup lang="ts">
import { useScreenStore } from '@/stores/screen'

const screen = useScreenStore()

const drop = (e: DragEvent) => {
	const dragData = e.dataTransfer?.getData('text/plain')
	if (dragData) {
		const dragItem = JSON.parse(dragData)
		screen.addNewElement(dragItem.name)
		console.log(screen.elements);
    
	}
	
  
}

</script>

<style lang="scss" scoped>
.main-screen{
  width: 100%;
  height: 100%;
}
</style>