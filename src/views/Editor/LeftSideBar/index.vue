<template>
  <div class="left-bar-wrapper">
    <el-tabs v-model="activeName">
      <el-tab-pane
        label="组件列表"
        name="componentList"
      >
        <ComponentList />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ComponentList from './ComponentList.vue'

const activeName = ref('componentList')
</script>

<style lang="scss" scoped>
.left-bar-wrapper{
    padding: 8px;
    .el-tabs{
        &::v-deep .el-tabs__nav{
            margin-left: 50px;
        }
    }
}
</style>