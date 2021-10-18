import { mount } from '@vue/test-utils'
import CoverPoem from './CoverPoem.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('Components / Cover Poem', () => {
  const defaultOptions = {
    propsData: {
      image: 'https://www.fillmurray.com/100/150'
    }
  }

  shallRender(CoverPoem, defaultOptions)

  test("shall have string prop 'image' influence over style", (): void => {
    const image = 'https://www.fillmurray.com/100/150'
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
