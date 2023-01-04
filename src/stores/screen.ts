import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';
import generateId from '@/utils/generateId';
import { useWidgetConfigStore } from '@/stores/widgetConfig';
const widgetConfig = useWidgetConfigStore();

// const basePropKeys = ['height', 'width', 'left', 'top'];

const panelConfigDeconstructor = (panelConfig: any) => {
	const allProps = {};
	panelConfig?.children.forEach((child: any) => {
		if (child.columns) {
			child.columns.forEach((col: any) => {
				Object.assign(allProps, {
					[col.key]: col.defaultValue
				});
			});
		}
	});
	return allProps;
};

export const useScreenStore = defineStore('screen', () => {
	const elements: any[] = reactive([]);

	const currentElementId = ref('');

	const addNewElement = (elementName: string, mouseCor?: any) => {
		const id = generateId();
		const config = widgetConfig.selectConfigByName(elementName);
		const props: any = panelConfigDeconstructor(config.stylePanelConfig);
		const { width, height } = props;

		const allProps = {
			...props,
			left: mouseCor.x - width / 2,
			top: mouseCor.y - height / 2
		};

		const element = {
			id,
			type: elementName,
			...allProps
		};
		elements.push(element);
		console.log('elements', elements);

		setCurrentElement(id);
		return element;
	};

	const getAllElements = () => {
		return elements;
	};

	const setCurrentElement = (id: string) => {
		currentElementId.value = id;
	};

	const getElementById = (id: string = currentElementId.value) => {
		return elements.find((ele) => ele.id === id);
	};

	const getCurrentElement = () => {
		return getElementById(currentElementId.value);
	};

	const updateElementById = (id: string, update: any) => {
		const element = getElementById(id);
		Object.keys(update).forEach((k) => {
			// element = {
			// 	...update[k],
			// 	...element
			// };
			// console.log('update', update);

			element[k] = update[k];
		});

		return element;
	};

	const updateCurrentElement = (update: any) => {
		updateElementById(currentElementId.value, update);
	};

	const handleCurrentElement = (id: string, update: any) => {
		currentElementId.value = id;
		updateCurrentElement(update);
	};

	return {
		addNewElement,
		getAllElements,
		setCurrentElement,
		getElementById,
		getCurrentElement,
		updateElementById,
		updateCurrentElement,
		handleCurrentElement
	};
});
