import Smutek20 from '@/components/poems/Smutek20/Smutek20.vue'
import { expectHeadMatchSnapshot, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'

describe('Poems / Smutek 2.0', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({ component: Smutek20 })

    test('shall head match snapshot', async () => {
      const wrapper = await createUnitTestWrapper({ component: Smutek20 })
      expectHeadMatchSnapshot({ wrapper })
      wrapper.destroy()
    })
  })
})
