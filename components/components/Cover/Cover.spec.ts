import Cover from '@/components/components/Cover/Cover.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'

describe('Components / Cover', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: Cover
    })

    test('shall vm.style output empty object with 0 image', async () => {
      const wrapper = await createUnitTestWrapper({
        component: Cover
      })
      // @ts-ignore
      expect(wrapper.vm.style).toMatchSnapshot()
      wrapper.destroy()
    })

    test('shall vm.style output image-set with 1 image', async () => {
      const wrapper = await createUnitTestWrapper({
        component: Cover,
        options: {
          propsData: {
            images: ['/images/post.test-post.1x.jpg']
          }
        }
      })
      // @ts-ignore
      expect(wrapper.vm.style).toMatchSnapshot()
      wrapper.destroy()
    })

    test('shall vm.style output image-set with 2 image', async () => {
      const wrapper = await createUnitTestWrapper({
        component: Cover,
        options: {
          propsData: {
            images: [
              '/images/post.test-post.1x.jpg',
              '/images/post.test-post.2x.jpg'
            ]
          }
        }
      })
      // @ts-ignore
      expect(wrapper.vm.style).toMatchSnapshot()
      wrapper.destroy()
    })
  })
})
