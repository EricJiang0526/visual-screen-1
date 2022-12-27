<template>
  <el-container class="main">
    <el-header class="header">
      <div class="title">
        {{ title }}
      </div>
      <TopToolbar class="top-toolbar" />
    </el-header>
    <el-container>
      <el-aside width="280px">
        <LeftSideBar />
      </el-aside>
      <el-main>
        <MainScreen></MainScreen>
      </el-main>
      <el-aside width="300px">
        <RightSideBar />
      </el-aside>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TopToolbar from './TopToolbar.vue'
import LeftSideBar from './LeftSideBar/index.vue'
import MainScreen from './MainScreen/index.vue'
import RightSideBar from './RightSideBar/index.vue'

const title = ref('default')

</script>

<style lang="scss" scoped>
.main{
    .header{
        height: 80px;
        .title{
            height: 30px;
        }
        .top-toolbar{
            height: 50px;
        }
    }
}
</style>