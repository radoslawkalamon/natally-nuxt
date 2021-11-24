import merge from 'lodash/merge'
import { mount } from '@vue/test-utils'
import AdjacentPostLinksPoem from './AdjacentPostLinksPoem.vue'
import { JestMockNuxtContent } from '@/devtools/jest.mock.nuxt.content'

jest.mock('@/utils/dto.meta.post.poem', () => ({
  DTOMetaPostPoem: class MockEmptyClass {
    path: string;
    title: string;

    constructor () {
      this.path = '/poezja-314/test-poem'
      this.title = 'Test poem'
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

describe('Blocks / Adjacent Post Links Poem', () => {
  test('shall render', async (): Promise<void> => {
    const wrapper = mount(AdjacentPostLinksPoem, defaultOptionsFactory())
    await (AdjacentPostLinksPoem as any).options.fetch.call(wrapper.vm)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
