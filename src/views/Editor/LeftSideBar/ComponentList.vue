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
import { ref, reactive } from 'vue';

const filterText = ref('')

const activeNames = ref([''])

const componentGroupList = reactive([
	{
		group: 'Bars',
		title: '柱状图',
		components:[
			{
				type: 'BarChart',
				name: '柱状图',
				picUrl: 'BarChart.png'
			},
			{
				type: 'BarChart22',
				name: '柱状图22',
				picUrl: 'Iframe.png'
			},
		]
	},
	{
		group: 'Etc',
		title: '交互类',
		components:[
			{
				type: 'Iframe',
				name: 'Iframe',
				picUrl: 'Iframe.png'
			}
		]
	}
])

const dragStart = (e: DragEvent, item: Object) => {
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