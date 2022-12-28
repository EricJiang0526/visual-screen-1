<template>
  <div
    class="screen-canvas"
    :style="canvasStyle"
  >
    <ElementRenderer
      v-for="item in screen.getAllElements()"
      :key="item.id"
      :params="item"
    />
  </div>
</template>

<script setup lang="ts">
import ElementRenderer from './ElementRenderer.vue'
import { computed } from 'vue';
import { useScreenStore } from '@/stores/screen'

const screen = useScreenStore()

const canvasStyle = computed(() => {
	return {
		width:'1920px',
		height: '920px'
	}
})
</script>

<style lang="scss" scoped>
.screen-canvas{
  position: relative;
}
</style>