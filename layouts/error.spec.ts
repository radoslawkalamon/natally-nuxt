import Error from '@/layouts/error.vue'
import { expectHeadMatchSnapshot, shallPassIntegrationSanityTest } from '@/devtools/jest.common.spec'
import { createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'

describe('Page / Error', () => {
  describe('Unit', () => {
    test('shall head match snapshot', async () => {
      const wrapper = await createUnitTestWrapper({ component: Error })
      expectHeadMatchSnapshot({ wrapper })
      wrapper.destroy()
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({ component: Error })
  })
})
