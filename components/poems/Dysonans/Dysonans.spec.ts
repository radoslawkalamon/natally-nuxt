import Dysonans from '@/components/poems/Dysonans/Dysonans.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Poems / Dysonans', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({ component: Dysonans })
  })
})
