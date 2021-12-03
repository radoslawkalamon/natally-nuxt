import PageMeta404 from '@/components/blocks/PageMeta404/PageMeta404.vue'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Blocks / Page Meta 404', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: PageMeta404,
      options: {
        stubs: [
          'ComponentsButtonLink',
          'ComponentsTitle',
          'WrappersText',
          'WrappersSection'
        ]
      }
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: PageMeta404
    })
  })
})
