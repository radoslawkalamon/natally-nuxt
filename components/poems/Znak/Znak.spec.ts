import Znak from '@/components/poems/Znak/Znak.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Poems / Znak', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({ component: Znak })
  })
})
