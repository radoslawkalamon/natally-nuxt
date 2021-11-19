import { mount } from '@vue/test-utils'
import CardStory from './CardStory.vue'
import { shallRender } from '@/devtools/jest.shared.spec'
import { DTOMetaPostStory } from '@/utils/dto.meta.post.story'

jest.mock('@/utils/formatter.date.meta', () => ({ formatterDateMeta: () => 'Mocked date formatter' }))
jest.mock('@/utils/formatter.time.reading', () => ({ formatterTimeReading: () => 'Mocked time formatter' }))

const defaultOptionsFactory = (metaPostStoryOptions = {}) => ({
  propsData: {
    metaPostStory: new DTOMetaPostStory({
      createdAt: '2021-11-01T00:00:00+00:00',
      description: 'Test description',
      imageCover: 'image-cover.webp',
      imageCover2x: 'image-cover.2x.webp',
      imageOpenGraph: 'image-open-graph.webp',
      path: '/test-url',
      timeReading: 2,
      title: 'Test title',
      updatedAt: '2021-11-01T00:00:00+00:00',
      ...metaPostStoryOptions
    })
  },
  stubs: [
    'ComponentsCover',
    'ComponentsTextMeta',
    'ComponentsTitle',
    'NuxtLink'
  ]
})

describe('Components / Card Story', () => {
  shallRender(CardStory, defaultOptionsFactory())

  describe('no audiobook', () => {
    const wrapperNoAudiobook = mount(CardStory, defaultOptionsFactory())

    test('shall components-card-story-audiobook aria-label has proper label', (): void => {
      expect(
        wrapperNoAudiobook.find('[data-test="components-card-story-audiobook"]').element.getAttribute('aria-label')
      ).toBe('Post nie posiada wersji dźwiękowej')
    })

    test('shall components-card-story-audiobook has two classes', (): void => {
      expect(
        wrapperNoAudiobook.find('[data-test="components-card-story-audiobook"]').classes()
      ).toHaveLength(2)
    })
  })

  describe('audiobook', () => {
    const wrapperAudiobook = mount(CardStory, defaultOptionsFactory({
      audiobookId: '123456'
    }))

    test('shall components-card-story-audiobook aria-label has proper label', (): void => {
      expect(
        wrapperAudiobook.find('[data-test="components-card-story-audiobook"]').element.getAttribute('aria-label')
      ).toBe('Post posiada wersję dźwiękową')
    })

    test('shall components-card-story-audiobook has one class', (): void => {
      expect(
        wrapperAudiobook.find('[data-test="components-card-story-audiobook"]').classes()
      ).toHaveLength(1)
    })
  })
})
