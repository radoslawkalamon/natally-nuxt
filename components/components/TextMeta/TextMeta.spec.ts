import TextMeta from './TextMeta.vue'
import { shallHaveStringProp, shallRender } from '@/devtools/jest.shared.spec'

describe('Wrappers / Text Meta', () => {
  const defaultOptions = {
    propsData: {
      text: 'Default Prop Text'
    }
  }

  shallRender(TextMeta, defaultOptions)
  shallHaveStringProp(TextMeta, 'text', defaultOptions)
})
