import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWidgetConfigStore = defineStore('widgetConfig', () => {

  let configList: any[] = reactive([])
  
  const setConfigList = (list: any[]) => {
    configList = list
  }

  const addConfig = (config: object) => {
    configList.push(config)
  }

  return { configList, setConfigList, addConfig }
})