import ListPoemsHomepage from '@/components/blocks/ListPoemsHomepage/ListPoemsHomepage.vue'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Blocks / List Poems Homepage', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: ListPoemsHomepage,
      options: {
        stubs: [
          'ComponentsCardPoem',
          'ComponentsLink',
          'ComponentsTitle',
          'WrappersListPoems',
          'WrappersSection'
        ]
      }
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: ListPoemsHomepage
    })
  })
})
