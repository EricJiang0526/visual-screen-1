<template>
  <div
    class="resizer-main"
    :style="baseStyle"
  >
    <div
      v-for="(dot,index) in dotList"
      :key="index"
      class="drag-dot"
    />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'

const props = defineProps<{
  params: any,
  active: boolean
}>()

const baseStyle = computed(() => {
	return {
		width: `${props.params.width}px`,
		height: `${props.params.height}px`,
		left: `${props.params.left}px`,
		top: `${props.params.top}px`
	}
})

const dotList = computed(() => {
	return []
})

</script>

<style lang="scss" scoped>
  .resizer-main{
    border: 1px solid #fff;
    .drag-dot{
      width: 8px;
      height: 8px;
    }
  }
</style>