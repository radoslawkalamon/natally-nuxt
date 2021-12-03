import Wsparcie from '@/components/poems/Wsparcie/Wsparcie.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Poems / Wsparcie', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({ component: Wsparcie })
  })
})
