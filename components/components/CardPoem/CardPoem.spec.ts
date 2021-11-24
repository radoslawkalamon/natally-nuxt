import CardPoem from './CardPoem.vue'
import { jestMockIntersectionObserver } from '@/devtools/jest.mock.intersectionObserver'
import { shallRender } from '@/devtools/jest.shared.spec'
import { DTOMetaPostPoem } from '@/utils/dto.meta.post.poem'

jest.mock('@/utils/formatter.date.meta', () => ({ formatterDateMeta: () => 'Mocked date formatter' }))

const defaultOptionsFactory = (metaPostPoemOptions = {}) => ({
  propsData: {
    metaPostPoem: new DTOMetaPostPoem({
      createdAt: '2021-11-01T00:00:00+00:00',
      description: 'Test description',
      imageCover: 'image-cover.webp',
      imageOpenGraph: 'image-open-graph.webp',
      path: '/test-url',
      title: 'Test title',
      updatedAt: '2021-11-01T00:00:00+00:00',
      ...metaPostPoemOptions
    })
  },
  stubs: [
    'NuxtLink',
    'ComponentsCover',
    'ComponentsTitle',
    'ComponentsTextMeta'
  ]
})

describe('Components / Card Poem', () => {
  beforeAll(() => {
    jestMockIntersectionObserver()
  })

  shallRender(CardPoem, defaultOptionsFactory())
})
