import Switch from '@/components/components/Switch/Switch.vue'
import { createDefaultOptionsFactory } from '@/devtools/jest.common.spec.utils'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

const defaultOptionsFactory = createDefaultOptionsFactory({
  propsData: {
    label: 'Test label',
    name: 'test-name'
  }
})

describe('Components / Switch', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: Switch,
      options: defaultOptionsFactory({
        stubs: ['WrappersText']
      })
    })

    shallPassUnitSanityTest({
      component: Switch,
      options: defaultOptionsFactory({
        stubs: ['WrappersText'],
        slots: {
          default: 'Default slot test'
        }
      })
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: Switch,
      options: defaultOptionsFactory()
    })

    shallPassIntegrationSanityTest({
      component: Switch,
      options: defaultOptionsFactory({
        slots: {
          default: 'Default slot test'
        }
      })
    })
  })
})
