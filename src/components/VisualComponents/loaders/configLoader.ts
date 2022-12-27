import { useWidgetConfigStore } from '@/stores/widgetConfig';

// 注册组件configs
const loadConfigs = () => {
	const widgetConfig = useWidgetConfigStore()
	const modules: Record<string, any> = import.meta.glob('@/components/VisualComponents/Widgets/*/config.ts', { eager: true })
	Object.keys(modules).map(item => {
		widgetConfig.addConfig(modules[item].default)
	})
}

export default loadConfigs