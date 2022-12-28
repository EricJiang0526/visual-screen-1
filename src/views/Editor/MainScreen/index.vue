<template>
  <div
    class="main-screen"
    @drop="drop"
    @dragenter.prevent
    @dragover.prevent
  >
    <ScreenLayout />
  </div>
</template>

<script setup lang="ts">
import ScreenLayout from '@/components/ScreenLayout/index.vue'
import { useScreenStore } from '@/stores/screen'

const screen = useScreenStore()

const drop = (e: DragEvent) => {
	const dragData = e.dataTransfer?.getData('text/plain')
	if (dragData) {
		const dragItem = JSON.parse(dragData)
		screen.addNewElement(dragItem.name)
    
	}
	
  
}

</script>

<style lang="scss" scoped>
.main-screen{
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>