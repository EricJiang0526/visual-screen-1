import type { App } from 'vue'

const install = (app: App) => {
  const modules: Record<string, any> = import.meta.glob('@/components/VisualComponents/Widgets/*/index.ts', { eager: true })
  Object.keys(modules).forEach(item => {
    const regResult = item.match(/Widgets\/(\w*)\/index/)
    const name = regResult && regResult[1]
    if (name) {
      app.component(name, modules[item].default)
    }
  })
}

export default install