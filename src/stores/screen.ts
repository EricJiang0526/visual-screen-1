import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import generateId from '@/utils/generateId'
import { useWidgetConfigStore } from '@/stores/widgetConfig';
const widgetConfig = useWidgetConfigStore()

export const useScreenStore = defineStore('screen', () => {

	const elements: any[] = reactive([])
  
	const addNewElement = (elementName: string) => {
		const id = generateId()
		const config = widgetConfig.selectConfigByName(elementName)
    
	}

	return { elements, addNewElement }
})