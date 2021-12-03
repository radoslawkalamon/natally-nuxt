import AdjacentPostLinksStory from '@/components/blocks/AdjacentPostLinksStory/AdjacentPostLinksStory.vue'
import { shallPassIntegrationSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory } from '@/devtools/jest.common.spec.utils'
import { JestMockNuxtContent } from '@/devtools/jest.mock.nuxt.content'

const mockStoryPost = {
  createdAt: '2016-12-28T21:23:23+00:00',
  description: 'Burzę, która znalazła się tuż nad nim uznał za jednocześnie zachwycającą, ale i gwałtowną, niebezpieczną. Nigdy nie widział czegoś tak pięknego.',
  imageCover: 'opowiadania.burza.1x.webp',
  imageCover2x: 'opowiadania.burza.2x.webp',
  imageOpenGraph: 'poezja-314.biznes.opengraph.png',
  path: '/opowiadania/mock-post/',
  timeReading: 28,
  title: 'timeReading',
  updatedAt: '2021-08-07T16:08:02+00:00'
}

const defaultOptionsFactory = createDefaultOptionsFactory({
  propsData: {
    slug: 'test-slug'
  }
})

describe('Blocks / Adjacent Post Links Story', () => {
  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: AdjacentPostLinksStory,
      description: 'prev / next post',
      options: defaultOptionsFactory({
        mocks: {
          $content: JestMockNuxtContent([mockStoryPost, mockStoryPost])
        }
      })
    })

    shallPassIntegrationSanityTest({
      component: AdjacentPostLinksStory,
      description: 'prev post only',
      options: defaultOptionsFactory({
        mocks: {
          $content: JestMockNuxtContent([mockStoryPost, null])
        }
      })
    })

    shallPassIntegrationSanityTest({
      component: AdjacentPostLinksStory,
      description: 'next post only',
      options: defaultOptionsFactory({
        mocks: {
          $content: JestMockNuxtContent([null, mockStoryPost])
        }
      })
    })
  })
})
