import { merge } from 'lodash'
import { mount } from '@vue/test-utils'
import ListPoems from './ListPoems.vue'
import { MockNuxtContent } from '@/devtools/jest.mock.nuxt.content'

jest.mock('@/utils/dto.meta.post.poem', () => ({
  DTOMetaPostPoem: class MockEmptyClass {}
}))

const defaultOptionsFactory = (options?: object) => merge({
  mocks: {
    $fetchState: {
      pending: false
    },
    $content: MockNuxtContent(Array(10).fill({}))
  },
  stubs: [
    'ComponentsLoading'
  ]
}, options)

describe('Wrappers / List Poems', () => {
  test('shall render', async (): Promise<void> => {
    const wrapper = mount(ListPoems, defaultOptionsFactory())
    await (ListPoems as any).options.fetch.call(wrapper.vm)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('shall have slot default', async (): Promise<void> => {
    const wrapper = mount(ListPoems, defaultOptionsFactory({
      slots: {
        default: 'This is slot "default" test.'
      }
    }))
    await (ListPoems as any).options.fetch.call(wrapper.vm)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('shall show ComponentsLoading when $fetchState.pending = true', async () => {
    const wrapper = mount(ListPoems, defaultOptionsFactory({
      mocks: {
        $fetchState: {
          pending: true
        }
      }
    }))
    await (ListPoems as any).options.fetch.call(wrapper.vm)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('shall { metaPostPoems } be Array<DTOMetaPostPoem>', async (): Promise<void> => {
    const wrapper = mount(ListPoems, defaultOptionsFactory())
    await (ListPoems as any).options.fetch.call(wrapper.vm)
    const metaPostPoemsConstructorNames = (wrapper.vm as any).metaPostPoems.map((e: any) => e.constructor.name)
    expect(metaPostPoemsConstructorNames.every((e: string) => e === 'MockEmptyClass')).toBeTruthy()
  })

  describe('Randomize: false', (): void => {
    test('shall { metaPostPoems } be Array fetch output Object', async (): Promise<void> => {
      const wrapper = mount(ListPoems, defaultOptionsFactory({
        mocks: {
          $content: MockNuxtContent({})
        }
      }))
      await (ListPoems as any).options.fetch.call(wrapper.vm)
      expect(Array.isArray((wrapper.vm as any).metaPostPoems)).toBeTruthy()
    })

    test('shall $content.limit() be called with 3 when limit = 3', async (): Promise<void> => {
      const mockNuxtContent = MockNuxtContent(Array(10).fill({}))
      const wrapper = mount(ListPoems, defaultOptionsFactory({
        propsData: {
          limit: 3
        },
        mocks: {
          $content: mockNuxtContent
        }
      }))
      await (ListPoems as any).options.fetch.call(wrapper.vm)
      expect(mockNuxtContent().limit).toHaveBeenCalledWith(3)
    })
  })

  describe('Randomize: true', (): void => {
    test('shall { metaPostPoems } be Array fetch output Object', async (): Promise<void> => {
      const wrapper = mount(ListPoems, defaultOptionsFactory({
        mocks: {
          $content: MockNuxtContent({})
        },
        propsData: {
          randomize: true
        }
      }))
      await (ListPoems as any).options.fetch.call(wrapper.vm)
      expect(Array.isArray((wrapper.vm as any).metaPostPoems)).toBeTruthy()
    })

    test('shall { metaPostPoems } be Array.length = 3 when limit = 3', async (): Promise<void> => {
      const wrapper = mount(ListPoems, defaultOptionsFactory({
        propsData: {
          limit: 3,
          randomize: true
        }
      }))
      await (ListPoems as any).options.fetch.call(wrapper.vm)
      expect((wrapper.vm as any).metaPostPoems).toHaveLength(3)
    })
  })
})