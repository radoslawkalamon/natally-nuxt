import ButtonLink from './ButtonLink.vue'
import { shallRender, shallHaveStringProp } from '@/utils/commonTestSpecs'

describe('Components / Button Link', () => {
  const defaultOptions = {
    propsData: {
      label: 'Click here'
    }
  }

  shallRender(ButtonLink, defaultOptions)
  shallHaveStringProp(ButtonLink, 'label', defaultOptions)
})
