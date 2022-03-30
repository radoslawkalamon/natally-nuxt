import LayoutDefault from '@/layouts/default.vue'
import { expectRootEmit, shallPassIntegrationSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory, createIntegrationTestWrapper } from '@/devtools/jest.common.spec.utils'
import { JestMockMatchMedia } from '@/devtools/jest.mock.matchMedia'

jest.mock('@/package.json', () => ({ version: 'TEST_ENVIROMENT' }))
jest.mock('lodash/throttle', () => (cb: Function) => cb)
JestMockMatchMedia()

jest
  .useFakeTimers()
  .setSystemTime(new Date('2021-11-01').getTime())

const defaultOptionsFactory = createDefaultOptionsFactory({
  attachTo: document.body
})

describe('Layouts / Default', () => {
  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: LayoutDefault,
      options: defaultOptionsFactory()
    })

    test('shall emit common/windowScroll on window scroll event', async () => {
      const wrapper = await createIntegrationTestWrapper({
        component: LayoutDefault,
        options: defaultOptionsFactory()
      })
      window.dispatchEvent(new CustomEvent('scroll'))
      expectRootEmit({
        name: 'common/windowScroll',
        wrapper
      })
      wrapper.destroy()
    })
  })
})
