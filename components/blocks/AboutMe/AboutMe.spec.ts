import AboutMe from '@/components/blocks/AboutMe/AboutMe.vue'
import { shallPassIntegrationSanityTest } from '@/devtools/jest.common.spec'

describe('Blocks / About Me', () => {
  describe('Integration', () => {
    shallPassIntegrationSanityTest({ component: AboutMe })
  })
})
