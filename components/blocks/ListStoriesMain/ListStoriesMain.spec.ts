import ListStoriesMain from '@/components/blocks/ListStoriesMain/ListStoriesMain.vue'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Blocks / List Stories Main', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: ListStoriesMain,
      options: {
        stubs: [
          'ComponentsCardStory',
          'ComponentsTitle',
          'WrappersListStories',
          'WrappersSection'
        ]
      }
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: ListStoriesMain
    })
  })
})
