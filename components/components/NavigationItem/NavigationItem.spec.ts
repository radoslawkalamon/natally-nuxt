import NavigationItem from './NavigationItem.vue'
import { shallHaveStringProp, shallRender } from '@/utils/commonTestSpecs'

describe('Components / Navigation Item', () => {
  const defaultOptions = {
    propsData: {
      label: 'Item label'
    }
  }

  shallRender(NavigationItem, defaultOptions)
  shallHaveStringProp(NavigationItem, 'label', defaultOptions)
})
