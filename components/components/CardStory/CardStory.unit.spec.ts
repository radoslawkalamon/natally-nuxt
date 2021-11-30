import CardStory from '@/components/components/CardStory/CardStory.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory } from '@/devtools/jest.common.spec.utils'
import { JestMockIntersectionObserver } from '@/devtools/jest.mock.IntersectionObserver'
import { DTOMetaPostStory } from '@/utils/dto.meta.post.story'

jest.mock('@/utils/formatter.date.meta', () => ({ formatterDateMeta: () => 'Mocked date formatter' }))
jest.mock('@/utils/formatter.time.reading', () => ({ formatterTimeReading: () => 'Mocked time formatter' }))
JestMockIntersectionObserver()

const defaultDTOMetaPostStory = {
  createdAt: '2021-11-01T00:00:00+00:00',
  description: 'Test description',
  imageCover: 'image-cover.webp',
  imageCover2x: 'image-cover.2x.webp',
  imageOpenGraph: 'image-open-graph.webp',
  path: '/test-url',
  timeReading: 2,
  title: 'Test title',
  updatedAt: '2021-11-01T00:00:00+00:00'
}

const defaultOptionsFactory = createDefaultOptionsFactory({
  propsData: {
    metaPostStory: new DTOMetaPostStory(defaultDTOMetaPostStory)
  },
  stubs: [
    'ComponentsCover',
    'ComponentsTextMeta',
    'ComponentsTitle'
  ]
})

describe('Components / Card Story', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: CardStory,
      description: 'no audiobook / not in the viewport',
      options: defaultOptionsFactory()
    })

    shallPassUnitSanityTest({
      component: CardStory,
      description: 'audiobook / in the viewport',
      options: defaultOptionsFactory({
        propsData: {
          metaPostStory: new DTOMetaPostStory({
            ...defaultDTOMetaPostStory,
            audiobookId: '123456'
          })
        },
        data () {
          return {
            'common/intersectionObserver/shownOnce': true
          }
        }
      })
    })
  })
})
