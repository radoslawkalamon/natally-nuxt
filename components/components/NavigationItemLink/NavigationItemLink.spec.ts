import NavigationItemLink from './NavigationItemLink.vue'
import { shallHaveStringProp, shallRender } from '@/utils/commonTestSpecs'

describe('Components / Navigation Item Link', () => {
  const defaultOptions = {
    propsData: {
      label: 'Item label'
    },
    stubs: {
      NuxtLink: {
        template: '<a href="#"><slot /></a>'
      }
    }
  }

  shallRender(NavigationItemLink, defaultOptions)
  shallHaveStringProp(NavigationItemLink, 'label', defaultOptions)
})
