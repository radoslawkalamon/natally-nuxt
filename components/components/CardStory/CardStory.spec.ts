import { merge } from 'lodash'
import { mount } from '@vue/test-utils'
import CardStory from './CardStory.vue'
import { shallRender } from '@/utils/commonTestSpecs'

jest.mock('@/utils/DTO/StoryPostExcerpt', () => Object)

describe('Components / Card Story', () => {
  const defaultOptions = {
    propsData: {
      storyPostExcerpt: {
        id: '1234',
        datePublished: '15.10.2021',
        title: 'Hello world',
        url: '/poezja-314/hello-world',
        coverImage: '/poem-cover-image.webp',
        coverImage2x: '/poem-cover-image-2x.webp',
        isAudiobook: true,
        readingTime: '5 minut'
      }
    },
    stubs: {
      ComponentsCoverStory: {
        template: '<div data-stub="components-cover-story" />'
      },
      ComponentsTextMeta: {
        template: '<p data-stub="components-text-meta" />'
      },
      ComponentsTitle: {
        template: '<h1 data-stub="components-title" />'
      },
      NuxtLink: {
        template: '<a data-stub="nuxt-link" href="#"><slot /></a>'
      }
    }
  }

  shallRender(CardStory, defaultOptions)

  describe('isAudiobook: true', () => {
    let wrapper: ReturnType<typeof mount>

    beforeAll(() => {
      wrapper = mount(CardStory, defaultOptions)
    })

    test('shall isAudiobook: true have influence over components-card-story-audiobook aria-label', (): void => {
      const audiobookMeta = wrapper.find('[data-test="components-card-story-audiobook"]')
      expect(audiobookMeta.element.getAttribute('aria-label')).toBe('Post posiada wersję dźwiękową')
    })

    test('shall isAudiobook: true have no influence over components-card-story-audiobook classes', (): void => {
      const audiobookMeta = wrapper.find('[data-test="components-card-story-audiobook"]')
      expect(audiobookMeta.classes()).toHaveLength(1)
    })
  })

  describe('isAudiobook: false', () => {
    let wrapper: ReturnType<typeof mount>

    beforeAll(() => {
      const options = merge(defaultOptions, {
        propsData: {
          storyPostExcerpt: {
            isAudiobook: false
          }
        }
      })
      wrapper = mount(CardStory, options)
    })

    test('shall isAudiobook: false have influence over components-card-story-audiobook aria-label', (): void => {
      const audiobookMeta = wrapper.find('[data-test="components-card-story-audiobook"]')
      expect(audiobookMeta.element.getAttribute('aria-label')).toBe('Post nie posiada wersji dźwiękowej')
    })

    test('shall isAudiobook: false have no influence over components-card-story-audiobook classes', (): void => {
      const audiobookMeta = wrapper.find('[data-test="components-card-story-audiobook"]')
      expect(audiobookMeta.classes()).toHaveLength(2)
    })
  })
})
