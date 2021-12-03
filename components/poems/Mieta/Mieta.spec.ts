import Mieta from '@/components/poems/Mieta/Mieta.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Poems / Mięta', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({ component: Mieta })
  })
})
