import { merge } from 'lodash'
import { mount } from '@vue/test-utils'
import AdjacentPostLinksStory from './AdjacentPostLinksStory.vue'
import { MockNuxtContent } from '@/devtools/jest.mock.nuxt.content'

jest.mock('@/utils/dto.meta.post.story', () => ({
  DTOMetaPostStory: class MockEmptyClass {
    path: string;
    title: string;

    constructor () {
      this.path = '/opowiadania/test-story'
      this.title = 'Test story'
    }
  }
}))

const defaultOptionsFactory = (options?: object) => merge({
  mocks: {
    $fetchState: {
      pending: false
    },
    $content: MockNuxtContent(Array(2).fill({}))
  },
  propsData: {
    slug: 'test-slug'
  },
  stubs: [
    'ComponentsAdjacentPostLinkPlaceholder',
    'ComponentsAdjacentPostLinkPrevious',
    'ComponentsAdjacentPostLinkNext'
  ]
}, options)

describe('Blocks / Adjacent Post Links Story', () => {
  test('shall render', async (): Promise<void> => {
    const wrapper = mount(AdjacentPostLinksStory, defaultOptionsFactory())
    await (AdjacentPostLinksStory as any).options.fetch.call(wrapper.vm)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('shall show placeholders when loading', async (): Promise<void> => {
    const wrapper = mount(AdjacentPostLinksStory, defaultOptionsFactory({
      mocks: {
        $fetchState: {
          pending: true
        }
      }
    }))
    await (AdjacentPostLinksStory as any).options.fetch.call(wrapper.vm)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
