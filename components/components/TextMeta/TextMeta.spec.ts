import TextMeta from './TextMeta.vue'
import { shallHaveStringProp, shallRender } from '@/utils/commonTestSpecs'

describe('Wrappers / Text Meta', () => {
  const defaultOptions = {
    propsData: {
      text: 'Default Prop Text'
    }
  }

  shallRender(TextMeta, 'components-text-meta', defaultOptions)
  shallHaveStringProp(TextMeta, 'text', defaultOptions)
})
