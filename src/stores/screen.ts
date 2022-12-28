import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import generateId from '@/utils/generateId'
import { useWidgetConfigStore } from '@/stores/widgetConfig';
const widgetConfig = useWidgetConfigStore()

const basePropKeys = ['height', 'width', 'left', 'top']

const panelConfigDeconstructor = (panelConfig: any) => {
	const baseProps = {}
	const exProps = {}
	panelConfig?.children.forEach((child: any) => {
		if (child.columns) {
			child.columns.forEach((col: any) => {
				if (basePropKeys.includes(col.key)) {
					Object.assign(baseProps, {
						[col.key]: col.defaultValue
					})
				} else {
					Object.assign(exProps, {
						[col.key]: col.defaultValue
					})
				}
				
			})
		}
	})
	return {
		baseProps,
		exProps
	}
}

export const useScreenStore = defineStore('screen', () => {

	const elements: any[] = reactive([])
  
	const addNewElement = (elementName: string) => {
		const id = generateId()
		const config = widgetConfig.selectConfigByName(elementName)
		const allProps = panelConfigDeconstructor(config.stylePanelConfig)

		const element = {
			id,
			type: elementName,
			...allProps
		}
		elements.push(element)
	}

	const getAllElements = () => {
		return elements
	}

	return { elements, addNewElement, getAllElements }
})