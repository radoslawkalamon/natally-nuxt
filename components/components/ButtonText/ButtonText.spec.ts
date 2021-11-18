import ButtonText from '@/components/components/ButtonText/ButtonText.vue'
import { shallHaveStringProp, shallRender } from '@/devtools/jest.shared.spec'

describe('Components / Button Text', () => {
  const defaultOptions = {
    propsData: {
      label: 'Item label'
    }
  }

  shallRender(ButtonText, defaultOptions)
  shallHaveStringProp(ButtonText, 'label', defaultOptions)
})
