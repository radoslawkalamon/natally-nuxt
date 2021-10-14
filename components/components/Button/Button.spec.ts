import Button from './Button.vue'
import { shallRender, shallHaveStringProp, shallClickTriggerEvent } from '@/utils/commonTestSpecs'

describe('Components / Button', () => {
  const defaultOptions = {
    propsData: {
      label: 'Click here'
    }
  }

  shallRender(Button, defaultOptions)
  shallHaveStringProp(Button, 'label', defaultOptions)
  shallClickTriggerEvent(Button, 'click', defaultOptions)
})
