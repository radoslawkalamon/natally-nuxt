import Audiobook from '@/components/blocks/Audiobook/Audiobook.vue'
import { expectRootEmit, shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory, createIntegrationTestWrapper } from '@/devtools/jest.common.spec.utils'

const defaultOptionsUnitFactory = createDefaultOptionsFactory({
  propsData: {
    id: '1234567890'
  },
  stubs: [
    'ComponentsButton',
    'WrappersText'
  ]
})

const defaultOptionsIntegrationFactory = createDefaultOptionsFactory({
  propsData: {
    id: '1234567890'
  }
})

describe('Blocks / Audiobook', () => {
  describe('Unit', () => {
    beforeEach(() => {
      jest.restoreAllMocks()
    })

    shallPassUnitSanityTest({
      component: Audiobook,
      description: 'ID = 0',
      options: defaultOptionsUnitFactory({
        beforeCreate () {
          process.client = true
        },
        propsData: {
          id: '0'
        }
      })
    })

    shallPassUnitSanityTest({
      component: Audiobook,
      description: 'Prompt',
      options: defaultOptionsUnitFactory({
        beforeCreate () {
          process.client = true
          Storage.prototype.getItem = jest.fn(() => '0')
        }
      })
    })

    shallPassUnitSanityTest({
      component: Audiobook,
      description: 'Prompt on server with Storage = 1',
      options: defaultOptionsUnitFactory({
        beforeCreate () {
          process.client = false
          Storage.prototype.getItem = jest.fn(() => '1')
        }
      })
    })

    shallPassUnitSanityTest({
      component: Audiobook,
      description: 'Iframe',
      options: defaultOptionsUnitFactory({
        beforeCreate () {
          process.client = true
          Storage.prototype.getItem = jest.fn(() => '1')
        }
      })
    })
  })

  describe('Integration', () => {
    beforeEach(() => {
      jest.restoreAllMocks()
    })

    shallPassIntegrationSanityTest({
      component: Audiobook,
      description: 'Prompt',
      options: defaultOptionsIntegrationFactory({
        beforeCreate () {
          process.client = true
          Storage.prototype.getItem = jest.fn(() => '0')
        }
      })
    })

    test('shall root emit "privacy/modal/toggle" on prompt button click', async () => {
      const wrapper = await createIntegrationTestWrapper({
        component: Audiobook,
        options: defaultOptionsIntegrationFactory({
          beforeCreate () {
            process.client = true
            Storage.prototype.getItem = jest.fn(() => '0')
          }
        })
      })

      wrapper.get('[data-test="blocks-audiobook-privacy-modal-open"]').trigger('click')
      expectRootEmit({
        name: 'privacy/modal/toggle',
        wrapper
      })

      wrapper.destroy()
    })

    shallPassIntegrationSanityTest({
      component: Audiobook,
      description: 'Iframe',
      options: defaultOptionsIntegrationFactory({
        beforeCreate () {
          process.client = true
          Storage.prototype.getItem = jest.fn(() => '1')
        }
      })
    })
  })
})
