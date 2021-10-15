import CardPoem from './CardPoem.vue'
import { shallRender } from '@/utils/commonTestSpecs'

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
        template: '<div><slot /></div>'
      },
      ComponentsTextMeta: {
        template: '<div><slot /></div>'
      },
      ComponentsTitle: {
        template: '<div><slot /></div>'
      },
      NuxtLink: {
        template: '<div><slot /></div>'
      }
    }
  }

  shallRender(CardPoem, defaultOptions)
})
