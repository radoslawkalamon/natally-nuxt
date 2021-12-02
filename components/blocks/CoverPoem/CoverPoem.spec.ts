import CoverPoem from '@/components/blocks/CoverPoem/CoverPoem.vue'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Blocks / Cover Poem', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: CoverPoem,
      description: 'no images',
      options: {
        propsData: {
          images: []
        },
        stubs: ['ComponentsCover']
      }
    })

    shallPassUnitSanityTest({
      component: CoverPoem,
      description: 'with images',
      options: {
        propsData: {
          images: ['/images/post.test-post.1x.jpg']
        },
        stubs: ['ComponentsCover']
      }
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: CoverPoem,
      description: 'no images',
      options: {
        propsData: {
          images: []
        }
      }
    })

    shallPassIntegrationSanityTest({
      component: CoverPoem,
      description: 'with images',
      options: {
        propsData: {
          images: ['/images/post.test-post.1x.jpg']
        }
      }
    })
  })
})
