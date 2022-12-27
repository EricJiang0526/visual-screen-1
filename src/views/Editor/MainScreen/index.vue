<template>
  <div class="main-screen" @drop="drop" @dragenter.prevent @dragover.prevent></div>
</template>

<script setup lang="ts">

const drop = (e: DragEvent) => {
  console.log(e.dataTransfer?.getData('text/plain'));
  
}

</script>

<style lang="scss" scoped>
.main-screen{
  width: 100%;
  height: 100%;
}
</style>