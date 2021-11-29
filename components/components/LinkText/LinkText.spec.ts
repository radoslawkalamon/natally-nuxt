import LinkText from '@/components/components/LinkText/LinkText.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Components / Link Text', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: LinkText,
      options: {
        propsData: {
          label: 'Item label'
        }
      }
    })
  })
})
