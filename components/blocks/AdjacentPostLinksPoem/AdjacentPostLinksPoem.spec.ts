import AdjacentPostLinksPoem from '@/components/blocks/AdjacentPostLinksPoem/AdjacentPostLinksPoem.vue'
import { shallPassIntegrationSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory } from '@/devtools/jest.common.spec.utils'
import { JestMockNuxtContent } from '@/devtools/jest.mock.nuxt.content'

const mockPoemPost = {
  createdAt: '2021-01-18T11:00:06+00:00',
  description: 'Interes to interes, przyjemności to przyjemności.',
  imageCover: 'poezja-314.biznes.webp',
  imageOpenGraph: 'poezja-314.biznes.opengraph.png',
  path: '/poezja-314/mock-post/',
  title: 'Biznes',
  updatedAt: '2021-01-12T12:33:36+00:00'
}

const defaultOptionsFactory = createDefaultOptionsFactory({
  propsData: {
    slug: 'test-slug'
  }
})

describe('Blocks / Adjacent Post Links Poem', () => {
  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: AdjacentPostLinksPoem,
      description: 'prev / next post',
      options: defaultOptionsFactory({
        mocks: {
          $content: JestMockNuxtContent([mockPoemPost, mockPoemPost])
        }
      })
    })

    shallPassIntegrationSanityTest({
      component: AdjacentPostLinksPoem,
      description: 'prev post only',
      options: defaultOptionsFactory({
        mocks: {
          $content: JestMockNuxtContent([mockPoemPost, null])
        }
      })
    })

    shallPassIntegrationSanityTest({
      component: AdjacentPostLinksPoem,
      description: 'next post only',
      options: defaultOptionsFactory({
        mocks: {
          $content: JestMockNuxtContent([null, mockPoemPost])
        }
      })
    })
  })
})
