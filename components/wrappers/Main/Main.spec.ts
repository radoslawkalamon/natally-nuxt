import Main from '@/components/wrappers/Main/Main.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Wrappers / Main', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: Main,
      options: {
        slots: {
          default: 'Slot default text'
        }
      }
    })
  })
})
