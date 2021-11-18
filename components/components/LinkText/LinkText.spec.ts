import LinkText from './LinkText.vue'
import { shallHaveStringProp, shallRender } from '@/devtools/jest.shared.spec'

describe('Components / Link Text', () => {
  const defaultOptions = {
    propsData: {
      label: 'Item label'
    },
    stubs: [
      'NuxtLink'
    ]
  }

  shallRender(LinkText, defaultOptions)
  shallHaveStringProp(LinkText, 'label', defaultOptions)
})
