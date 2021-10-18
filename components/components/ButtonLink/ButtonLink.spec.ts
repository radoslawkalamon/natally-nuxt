import ButtonLink from './ButtonLink.vue'
import { shallRender, shallHaveStringProp } from '@/utils/commonTestSpecs'

describe('Components / Button Link', () => {
  const defaultOptions = {
    propsData: {
      label: 'Click here'
    },
    stubs: {
      NuxtLink: {
        template: '<a href="#"><slot /></a>'
      }
    }
  }

  shallRender(ButtonLink, defaultOptions)
  shallHaveStringProp(ButtonLink, 'label', defaultOptions)
})
