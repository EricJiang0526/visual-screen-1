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
						component: 'PanelNumberInput',
						span: 12,
						props: { min: 1 }
					},
					{
						key: 'height',
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
						component: 'PanelNumberInput',
						span: 12
					},
					{
						key: 'top',
						component: 'PanelNumberInput',
						span: 12
					}
				]
			}
		]
	}
}

export default conponentConfig