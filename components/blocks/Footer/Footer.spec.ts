import Footer from '@/components/blocks/Footer/Footer.vue'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

jest
  .useFakeTimers()
  .setSystemTime(new Date('2021-11-01').getTime())

process.env.DEPLOY_COMMIT_SHA = '9.9.9.TEST_ENVIROMENT'

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
