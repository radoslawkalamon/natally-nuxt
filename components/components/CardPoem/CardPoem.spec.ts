import CardPoem from './CardPoem.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

jest.mock('@/utils/DTO/PoemPostExcerpt', () => Object)

describe('Components / Card Poem', () => {
  const defaultOptions = {
    propsData: {
      poemPostExcerpt: {
        coverImage: '/poem-cover-image.webp',
        datePublished: '21.10.2021',
        title: 'My test title',
        url: '/poem-test-url'
      }
    },
    stubs: {
      ComponentsCoverPoem: {
        template: '<div data-stub="components-cover-poem" />'
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

  shallRender(CardPoem, defaultOptions)
})
