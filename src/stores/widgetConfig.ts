import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useWidgetConfigStore = defineStore('widgetConfig', () => {
	let configList: any[] = reactive([]);

	const setConfigList = (list: any[]) => {
		configList = list;
	};

	const addConfig = (config: object) => {
		configList.push(config);
	};

	const selectConfigByName = (name: string) => {
		const row = configList.find((c) => c.name === name);
		return row || null;
	};

	return { configList, setConfigList, addConfig, selectConfigByName };
});
