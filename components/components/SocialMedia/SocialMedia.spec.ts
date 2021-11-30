import SocialMedia from '@/components/components/SocialMedia/SocialMedia.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Components / Social Media', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({ component: SocialMedia })
  })
})
