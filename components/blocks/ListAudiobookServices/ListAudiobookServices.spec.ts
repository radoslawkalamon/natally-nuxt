import ListAudiobookServices from '@/components/blocks/ListAudiobookServices/ListAudiobookServices.vue'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Blocks / List Audiobook Services', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: ListAudiobookServices,
      options: {
        stubs: [
          'ComponentsCardAudiobookService'
        ]
      }
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({ component: ListAudiobookServices })
  })
})
