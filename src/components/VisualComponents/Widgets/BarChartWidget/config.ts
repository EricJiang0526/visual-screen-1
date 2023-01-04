const conponentConfig = {
	name: 'BarChartWidget',
	label: '柱状图',
	picUrl: 'BarChart.png',

	stylePanelConfig: {
		children: [
			{
				label: '图表尺寸',
				columns: [
					{
						key: 'width',
						defaultValue: 300,
						component: 'PanelNumberInput',
						span: 12,
						props: { min: 1 }
					},
					{
						key: 'height',
						defaultValue: 200,
						component: 'PanelNumberInput',
						span: 12,
						props: { min: 1 }
					}
				]
			},
			{
				label: '图表位置',
				columns: [
					{
						key: 'left',
						defaultValue: 0,
						component: 'PanelNumberInput',
						span: 12
					},
					{
						key: 'top',
						defaultValue: 0,
						component: 'PanelNumberInput',
						span: 12
					}
				]
			}
		]
	}
};

export default conponentConfig;
