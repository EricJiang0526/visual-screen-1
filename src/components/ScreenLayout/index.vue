<template>
  <div
    class="screen-canvas"
    :style="canvasStyle"
  >
    <!-- <ElementRenderer
      v-for="item in screen.getAllElements()"
      :key="item.id"
      :params="item"
    /> -->
    <DragResize
      v-for="item in screen.getAllElements()"
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
import ElementRenderer from './ElementRenderer.vue'
import DragResize from './DragResize.vue'
import { computed } from 'vue';
import { useScreenStore } from '@/stores/screen'

const screen = useScreenStore()

const canvasStyle = computed(() => {
	return {
		width:'1920px',
		height: '920px'
	}
})

const isActive = (id: string) => {
	return screen.getCurrentElement().id === id
}
</script>

<style lang="scss" scoped>
.screen-canvas{
  position: relative;
}
</style>