import Footer from '@/components/blocks/Footer/Footer.vue'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

jest.mock('@/package.json', () => ({ version: 'TEST_ENVIROMENT' }))
jest
  .useFakeTimers()
  .setSystemTime(new Date('2021-11-01').getTime())

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
