import AnimationPufferfish from '@/components/blocks/AnimationPufferfish/AnimationPufferfish.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Blocks / Animation Pufferfish', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({ component: AnimationPufferfish })
  })
})
