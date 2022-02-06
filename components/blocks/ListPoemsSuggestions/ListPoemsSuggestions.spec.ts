import ListPoemsSuggestions from '@/components/blocks/ListPoemsSuggestions/ListPoemsSuggestions.vue'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Blocks / List Poems Suggestions', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: ListPoemsSuggestions,
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
      component: ListPoemsSuggestions
    })
  })
})
