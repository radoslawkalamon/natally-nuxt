import NavigationItem from './NavigationItem.vue'
import { shallHaveStringProp, shallRender } from '@/devtools/jest.shared.spec'

describe('Components / Navigation Item', () => {
  const defaultOptions = {
    propsData: {
      label: 'Item label'
    }
  }

  shallRender(NavigationItem, defaultOptions)
  shallHaveStringProp(NavigationItem, 'label', defaultOptions)
})
