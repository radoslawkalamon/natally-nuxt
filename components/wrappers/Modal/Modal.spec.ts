import Modal from '@/components/wrappers/Modal/Modal.vue'
import { createDefaultOptionsFactory } from '@/devtools/jest.common.spec.utils'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

const defaultOptionsFactory = createDefaultOptionsFactory({
  propsData: {
    title: 'Test title'
  },
  slots: {
    default: 'This is default slot test'
  }
})

describe('Wrappers / Modal', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: Modal,
      options: defaultOptionsFactory({
        stubs: ['ComponentsTitle']
      })
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: Modal,
      options: defaultOptionsFactory()
    })
  })
})
