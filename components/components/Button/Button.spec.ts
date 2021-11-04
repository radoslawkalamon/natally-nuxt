import Button from './Button.vue'
import { shallRender, shallHaveStringProp, shallClickTriggerEvent } from '@/devtools/jest.shared.spec'

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
