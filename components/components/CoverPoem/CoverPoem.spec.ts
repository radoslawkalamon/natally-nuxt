import { mount } from '@vue/test-utils'
import CoverPoem from './CoverPoem.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('Components / Cover Poem', () => {
  const defaultOptions = {
    propsData: {
      image: 'https://via.placeholder.com/100x150.webp'
    }
  }

  shallRender(CoverPoem, 'components-cover-poem', defaultOptions)

  test("shall have string prop 'image' influence over style", (): void => {
    const image = 'https://via.placeholder.com/100x150.webp'
    const wrapper = mount(CoverPoem, {
      propsData: {
        ...defaultOptions.propsData,
        image
      }
    })
    const styleWrapper = wrapper.element.getAttribute('style') || ''
    expect(styleWrapper).toContain(image)
  })
})
