import TextBase from '@/components/wrappers/Text/Text.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Wrappers / Text', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: TextBase,
      options: {
        slots: {
          default: 'Slot default text'
        }
      }
    })
  })
})
