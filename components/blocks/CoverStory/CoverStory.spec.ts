import CoverStory from '@/components/blocks/CoverStory/CoverStory.vue'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Blocks / Cover Story', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: CoverStory,
      description: 'no images',
      options: {
        propsData: {
          images: []
        },
        stubs: ['ComponentsCover']
      }
    })

    shallPassUnitSanityTest({
      component: CoverStory,
      description: 'with images',
      options: {
        propsData: {
          images: [
            '/images/post.test-post.1x.jpg',
            '/images/post.test-post.2x.jpg'
          ]
        },
        stubs: ['ComponentsCover']
      }
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: CoverStory,
      description: 'no images',
      options: {
        propsData: {
          images: []
        }
      }
    })

    shallPassIntegrationSanityTest({
      component: CoverStory,
      description: 'with images',
      options: {
        propsData: {
          images: [
            '/images/post.test-post.1x.jpg',
            '/images/post.test-post.2x.jpg'
          ]
        }
      }
    })
  })
})
