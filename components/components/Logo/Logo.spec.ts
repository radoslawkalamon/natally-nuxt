import Logo from '@/components/components/Logo/Logo.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Components / Logo', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({ component: Logo })
  })
})
