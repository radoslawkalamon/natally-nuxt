import TextPoems from '@/components/wrappers/TextPoems/TextPoems.vue'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory } from '@/devtools/jest.common.spec.utils'

const defaultOptionsFactory = createDefaultOptionsFactory({
  slots: {
    default: 'Slot default text'
  }
})

describe('Wrappers / Text Poems', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: TextPoems,
      options: defaultOptionsFactory({
        stubs: ['WrappersText']
      })
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: TextPoems,
      options: defaultOptionsFactory()
    })
  })
})
