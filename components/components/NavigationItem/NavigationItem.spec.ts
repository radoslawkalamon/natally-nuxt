import NavigationItem from './NavigationItem.vue'
import { shallClickTriggerEvent, shallHaveStringProp, shallRender } from '@/utils/commonTestSpecs'

describe('Components / Navigation Item', () => {
  const defaultOptions = {
    propsData: {
      label: 'Item label'
    }
  }

  shallRender(NavigationItem, defaultOptions)
  shallHaveStringProp(NavigationItem, 'label', defaultOptions)
  shallClickTriggerEvent(NavigationItem, 'click', defaultOptions)
})
