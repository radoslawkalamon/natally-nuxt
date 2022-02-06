import PoemsFirstTime from '@/components/blocks/PoemsFirstTime/PoemsFirstTime.vue'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory, createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'

const defaultOptionsUnitFactory = createDefaultOptionsFactory({
  stubs: [
    'ComponentsLink',
    'WrappersSection',
    'WrappersText'
  ]
})

describe('Blocks / Poems First Time', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })

  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: PoemsFirstTime,
      description: 'hide',
      options: defaultOptionsUnitFactory({
        beforeCreate () {
          process.client = true
          Storage.prototype.getItem = jest.fn(() => '3')
        }
      })
    })

    shallPassUnitSanityTest({
      component: PoemsFirstTime,
      description: 'show',
      options: defaultOptionsUnitFactory({
        beforeCreate () {
          process.client = true
          Storage.prototype.getItem = jest.fn(() => '0')
        }
      })
    })

    test('shall on mounted call Storage Set', async () => {
      const spy = jest.spyOn(Storage.prototype, 'setItem')
      const wrapper = await createUnitTestWrapper({
        component: PoemsFirstTime
      })
      expect(spy).toBeCalledWith('poem-first-time-visits', '1')
      wrapper.destroy()
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: PoemsFirstTime,
      options: {
        beforeCreate () {
          process.client = true
          Storage.prototype.getItem = jest.fn(() => '0')
        }
      }
    })
  })
})
