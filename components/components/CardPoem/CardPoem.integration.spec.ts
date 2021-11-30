import CardPoem from '@/components/components/CardPoem/CardPoem.vue'
import { shallPassIntegrationSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory } from '@/devtools/jest.common.spec.utils'
import { JestMockIntersectionObserver } from '@/devtools/jest.mock.IntersectionObserver'
import { DTOMetaPostPoem } from '@/utils/dto.meta.post.poem'

JestMockIntersectionObserver()

const defaultOptionsFactory = createDefaultOptionsFactory({
  propsData: {
    metaPostPoem: new DTOMetaPostPoem({
      createdAt: '2021-11-01T00:00:00+00:00',
      description: 'Test description',
      imageCover: 'image-cover.webp',
      imageOpenGraph: 'image-open-graph.webp',
      path: '/test-url',
      title: 'Test title',
      updatedAt: '2021-11-01T00:00:00+00:00'
    })
  }
})

describe('Components / Card Poem', () => {
  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: CardPoem,
      description: 'not in the viewport',
      options: defaultOptionsFactory()
    })

    shallPassIntegrationSanityTest({
      component: CardPoem,
      description: 'in the viewport',
      options: defaultOptionsFactory({
        data () {
          return {
            'common/intersectionObserver/shownOnce': true
          }
        }
      })
    })
  })
})
