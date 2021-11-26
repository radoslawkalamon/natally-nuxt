import Footer from '@/components/blocks/Footer/Footer.vue'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Blocks / Footer', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: Footer,
      options: {
        stubs: [
          'ComponentsLogoCrustyBread',
          'ComponentsNavigationFooter',
          'WrappersText'
        ]
      }
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({ component: Footer })
  })
})
