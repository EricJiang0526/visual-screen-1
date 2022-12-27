<template>
  <div class="list-wrapper">
    <el-input v-model="filterText">
      <template #prefix>
        <el-icon class="el-input__icon">
          <search />
        </el-icon>
      </template>
    </el-input>
    <el-collapse v-model="activeNames">
      <el-collapse-item
        v-for="group in componentGroupList"
        :key="group.group"
        :title="group.title"
        :name="group.group"
      >
        <div class="group-wrapper">
          <div
            v-for="item in group.components"
            :key="item.type"
            class="component-wrapper"
            draggable="true"
            @dragstart="dragStart($event, item)"
          >
            <img
              :src="`src/assets/Thumbnail/${item.picUrl}`"
              alt=""
              width="106"
              height="60"
            >
            <div class="name">
              {{ item.name }}
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import componentGroupConfig from './componentGroupConfig'
import { useWidgetConfigStore } from '@/stores/widgetConfig';

const filterText = ref('')

const activeNames = ref([''])

// 获取左侧组件列表
const widgetConfig = useWidgetConfigStore()
const componentGroupList: any[] = componentGroupConfig.map(g => ({
	group: g.group,
	title: g.title,
	components: g.components.map(c => {  
		const comp = widgetConfig.configList.find(item => item.name === c)
		if (!comp) {
			return null
		} else {
			const { label='', name='', picUrl='404.png' } = comp
			return { label, name, picUrl }
		}
	}).filter(r => r)
}))

const dragStart = (e: DragEvent, item: object) => {
	e.dataTransfer?.setData('text/plain', JSON.stringify(item))
}

</script>

<style lang="scss" scoped>
.list-wrapper{
    width: 100%;
}
.group-wrapper{
    display: flex;
    .component-wrapper{
        width: 136px;
        height: 92px;
        margin: 6px 10px;
        text-align: center;
        cursor: pointer;
        &:hover{
            background-color: aqua;
        }
        img{
            margin-top: 3px;
        }
        .name{
            text-align: center;
        }
    }
}
</style>