import merge from 'lodash/merge'
import { mount } from '@vue/test-utils'
import AdjacentPostLinksStory from './AdjacentPostLinksStory.vue'
import { JestMockNuxtContent } from '@/devtools/jest.mock.nuxt.content'

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
    $content: JestMockNuxtContent(Array(2).fill({}))
  },
  propsData: {
    slug: 'test-slug'
  },
  stubs: [
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
})
