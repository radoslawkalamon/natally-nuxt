import ButtonText from '@/components/components/ButtonText/ButtonText.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Components / Button Text', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: ButtonText,
      options: {
        propsData: {
          label: 'Item label'
        }
      }
    })
  })
})
