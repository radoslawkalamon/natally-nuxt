import ListStories from '@/components/wrappers/ListStories/ListStories.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory, createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'
import { JestMockNuxtContent } from '@/devtools/jest.mock.nuxt.content'

jest.mock('@/utils/dto.meta.post.story', () => ({
  DTOMetaPostStory: class DTOMetaPostStory {}
}))

const defaultOptionsFactory = createDefaultOptionsFactory({
  mocks: {
    $content: JestMockNuxtContent(Array(10).fill({}))
  },
  slots: {
    default: 'This is slot "default" test.'
  }
})

describe('Wrappers / List Stories', (): void => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: ListStories,
      options: defaultOptionsFactory()
    })

    describe('Randomize: false', () => {
      test('shall { metaPostStories } match snapshot', async () => {
        const wrapper = await createUnitTestWrapper({
          component: ListStories,
          options: defaultOptionsFactory()
        })
        // @ts-ignore
        expect(wrapper.vm.metaPostStories).toMatchSnapshot()
        wrapper.destroy()
      })

      test('shall $content.limit() be called with 3 when limit = 3', async () => {
        const MockNuxtContent = JestMockNuxtContent(Array(1).fill({}))
        const wrapper = await createUnitTestWrapper({
          component: ListStories,
          options: defaultOptionsFactory({
            mocks: {
              $content: MockNuxtContent
            },
            propsData: {
              limit: 3
            }
          })
        })
        expect(MockNuxtContent().limit).toHaveBeenCalledWith(3)
        wrapper.destroy()
      })

      test('shall $content.where() be called with "/mock-path-false/" when without = "/mock-path-false/"', async () => {
        const MockNuxtContent = JestMockNuxtContent({})
        const wrapper = await createUnitTestWrapper({
          component: ListStories,
          options: defaultOptionsFactory({
            mocks: {
              $content: MockNuxtContent
            },
            propsData: {
              without: ['/mock-path-false/']
            }
          })
        })
        expect(MockNuxtContent().where).toHaveBeenCalledWith({ path: { $nin: ['/mock-path-false/'] } })
        wrapper.destroy()
      })
    })

    describe('Randomize: true', () => {
      test('shall { metaPostStories } match snapshot', async () => {
        const wrapper = await createUnitTestWrapper({
          component: ListStories,
          options: defaultOptionsFactory({
            propsData: {
              randomize: true
            }
          })
        })
        // @ts-ignore
        expect(wrapper.vm.metaPostStories).toMatchSnapshot()
        wrapper.destroy()
      })

      test('shall { metaPostStories } have length 3 when limit = 3', async () => {
        const wrapper = await createUnitTestWrapper({
          component: ListStories,
          options: defaultOptionsFactory({
            propsData: {
              limit: 3,
              randomize: true
            }
          })
        })
        // @ts-ignore
        expect(wrapper.vm.metaPostStories).toHaveLength(3)
        wrapper.destroy()
      })

      test('shall $content.where() be called with "/mock-path-true/" when without = "/mock-path-true/"', async () => {
        const MockNuxtContent = JestMockNuxtContent({})
        const wrapper = await createUnitTestWrapper({
          component: ListStories,
          options: defaultOptionsFactory({
            mocks: {
              $content: MockNuxtContent
            },
            propsData: {
              randomize: true,
              without: ['/mock-path-true/']
            }
          })
        })
        expect(MockNuxtContent().where).toHaveBeenCalledWith({ path: { $nin: ['/mock-path-true/'] } })
        wrapper.destroy()
      })
    })
  })
})
