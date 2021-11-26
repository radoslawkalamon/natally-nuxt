import MiedzyWierszami from '@/components/poems/MiedzyWierszami/MiedzyWierszami.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Poems / Między Wierszami', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({ component: MiedzyWierszami })
  })
})
