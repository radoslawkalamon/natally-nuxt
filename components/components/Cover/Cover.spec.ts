import { mount } from '@vue/test-utils'
import Cover from '@/components/components/Cover/Cover.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Components / Cover', () => {
  shallRender(Cover, {
    propsData: {
      images: [
        '/images/post.test-post.1x.jpg'
      ]
    }
  })

  test('shall vm.style output image-set with 1 image', () => {
    const wrapper = mount(Cover, {
      propsData: {
        images: [
          '/images/post.test-post.1x.jpg'
        ]
      }
    })
    // @ts-ignore
    expect(wrapper.vm.style).toMatchSnapshot()
  })

  test('shall vm.style output image-set with 2 image', () => {
    const wrapper = mount(Cover, {
      propsData: {
        images: [
          '/images/post.test-post.1x.jpg',
          '/images/post.test-post.2x.jpg'
        ]
      }
    })
    // @ts-ignore
    expect(wrapper.vm.style).toMatchSnapshot()
  })
})
