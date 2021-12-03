import ListPoems from '@/components/wrappers/ListPoems/ListPoems.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory, createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'
import { JestMockNuxtContent } from '@/devtools/jest.mock.nuxt.content'

jest.mock('@/utils/dto.meta.post.poem', () => ({
  DTOMetaPostPoem: class DTOMetaPostPoem {}
}))

const defaultOptionsFactory = createDefaultOptionsFactory({
  mocks: {
    $content: JestMockNuxtContent(Array(10).fill({}))
  },
  slots: {
    default: 'This is slot "default" test.'
  }
})

describe('Wrappers / List Poems', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: ListPoems,
      options: defaultOptionsFactory()
    })

    describe('Randomize: false', () => {
      test('shall { metaPostPoems } match snapshot', async () => {
        const wrapper = await createUnitTestWrapper({
          component: ListPoems,
          options: defaultOptionsFactory()
        })
        // @ts-ignore
        expect(wrapper.vm.metaPostPoems).toMatchSnapshot()
        wrapper.destroy()
      })

      test('shall $content.limit() be called with 3 when limit = 3', async () => {
        const MockNuxtContent = JestMockNuxtContent({})
        const wrapper = await createUnitTestWrapper({
          component: ListPoems,
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
          component: ListPoems,
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
      test('shall { metaPostPoems } match snapshot', async () => {
        const wrapper = await createUnitTestWrapper({
          component: ListPoems,
          options: defaultOptionsFactory({
            propsData: {
              randomize: true
            }
          })
        })
        // @ts-ignore
        expect(wrapper.vm.metaPostPoems).toMatchSnapshot()
        wrapper.destroy()
      })

      test('shall { metaPostPoems } have length 3 when limit = 3', async () => {
        const wrapper = await createUnitTestWrapper({
          component: ListPoems,
          options: defaultOptionsFactory({
            propsData: {
              limit: 3,
              randomize: true
            }
          })
        })
        // @ts-ignore
        expect(wrapper.vm.metaPostPoems).toHaveLength(3)
        wrapper.destroy()
      })

      test('shall $content.where() be called with "/mock-path-true/" when without = "/mock-path-true/"', async () => {
        const MockNuxtContent = JestMockNuxtContent({})
        const wrapper = await createUnitTestWrapper({
          component: ListPoems,
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
