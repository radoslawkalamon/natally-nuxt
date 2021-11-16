import { merge } from 'lodash'
import { mount } from '@vue/test-utils'
import ListStories from './ListStories.vue'
import { MockNuxtContent } from '@/devtools/jest.mock.nuxt.content'

jest.mock('@/utils/dto.meta.post.story', () => ({
  DTOMetaPostStory: class MockEmptyClass {}
}))

const defaultOptionsFactory = (options?: object) => merge({
  mocks: {
    $content: MockNuxtContent(Array(10).fill({}))
  }
}, options)

describe('Wrappers / List Stories', (): void => {
  test('shall render', async (): Promise<void> => {
    const wrapper = mount(ListStories, defaultOptionsFactory())
    await (ListStories as any).options.fetch.call(wrapper.vm)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('shall have slot default', async (): Promise<void> => {
    const wrapper = mount(ListStories, defaultOptionsFactory({
      slots: {
        default: 'This is slot "default" test.'
      }
    }))
    await (ListStories as any).options.fetch.call(wrapper.vm)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('shall { metaPostStories } be Array<DTOMetaPostStory>', async (): Promise<void> => {
    const wrapper = mount(ListStories, defaultOptionsFactory())
    await (ListStories as any).options.fetch.call(wrapper.vm)
    const metaPostStoriesConstructorNames = (wrapper.vm as any).metaPostStories.map((e: any) => e.constructor.name)
    expect(metaPostStoriesConstructorNames.every((e: string) => e === 'MockEmptyClass')).toBeTruthy()
  })

  describe('Randomize: false', (): void => {
    test('shall { metaPostStories } be Array fetch output Object', async (): Promise<void> => {
      const wrapper = mount(ListStories, defaultOptionsFactory({
        mocks: {
          $content: MockNuxtContent({})
        }
      }))
      await (ListStories as any).options.fetch.call(wrapper.vm)
      expect(Array.isArray((wrapper.vm as any).metaPostStories)).toBeTruthy()
    })

    test('shall $content.limit() be called with 3 when limit = 3', async (): Promise<void> => {
      const mockNuxtContent = MockNuxtContent(Array(10).fill({}))
      const wrapper = mount(ListStories, defaultOptionsFactory({
        propsData: {
          limit: 3
        },
        mocks: {
          $content: mockNuxtContent
        }
      }))
      await (ListStories as any).options.fetch.call(wrapper.vm)
      expect(mockNuxtContent().limit).toHaveBeenCalledWith(3)
    })
  })

  describe('Randomize: true', (): void => {
    test('shall { metaPostStories } be Array fetch output Object', async (): Promise<void> => {
      const wrapper = mount(ListStories, defaultOptionsFactory({
        mocks: {
          $content: MockNuxtContent({})
        },
        propsData: {
          randomize: true
        }
      }))
      await (ListStories as any).options.fetch.call(wrapper.vm)
      expect(Array.isArray((wrapper.vm as any).metaPostStories)).toBeTruthy()
    })

    test('shall { metaPostStories } be Array.length = 3 when limit = 3', async (): Promise<void> => {
      const wrapper = mount(ListStories, defaultOptionsFactory({
        propsData: {
          limit: 3,
          randomize: true
        }
      }))
      await (ListStories as any).options.fetch.call(wrapper.vm)
      expect((wrapper.vm as any).metaPostStories).toHaveLength(3)
    })
  })
})
