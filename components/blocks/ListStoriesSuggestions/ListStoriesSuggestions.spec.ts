import ListStoriesSuggestions from '@/components/blocks/ListStoriesSuggestions/ListStoriesSuggestions.vue'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Blocks / List Stories Suggestions', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: ListStoriesSuggestions,
      options: {
        stubs: [
          'ComponentsButtonLink',
          'ComponentsCardPoem',
          'ComponentsTitle',
          'WrappersListStories',
          'WrappersSection'
        ]
      }
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: ListStoriesSuggestions
    })
  })
})
