import Checklista from '@/components/poems/Checklista/Checklista.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Poems / Checklista', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({ component: Checklista })
  })
})
