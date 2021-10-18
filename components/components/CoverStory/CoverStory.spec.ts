import { mount } from '@vue/test-utils'
import CoverStory from './CoverStory.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('Components / Cover Story', () => {
  const defaultOptions = {
    propsData: {
      alternativeText: 'Lorem ipsum',
      image: 'https://www.fillmurray.com/600/300',
      image2X: 'https://www.fillmurray.com/1200/600'
    }
  }

  shallRender(CoverStory, defaultOptions)

  test("shall have string prop 'alternativeText' influence over image.alt", (): void => {
    const alternativeText = 'This is prop alternativeText test.'
    const wrapper = mount(CoverStory, {
      propsData: {
        ...defaultOptions.propsData,
        alternativeText
      }
    })
    const imageAlt = wrapper.find('[data-test="components-cover-story-image"]').element.getAttribute('alt')
    expect(imageAlt).toBe(alternativeText)
  })

  test("shall have string prop 'image' influence over image.src & image.srcset", (): void => {
    const image = 'https://www.fillmurray.com/300/150'
    const wrapper = mount(CoverStory, {
      propsData: {
        ...defaultOptions.propsData,
        image
      }
    })
    const imageElement = wrapper.find('[data-test="components-cover-story-image"]').element
    const imageSrc = imageElement.getAttribute('src')
    const imageSrcset = imageElement.getAttribute('srcset')

    expect(imageSrc).toBe(image)
    expect(imageSrcset).toContain(image)
  })

  test("shall have string prop 'image2X' influence over image.srcset", (): void => {
    const image2X = 'https://www.fillmurray.com/500/250'
    const wrapper = mount(CoverStory, {
      propsData: {
        ...defaultOptions.propsData,
        image2X
      }
    })
    const imageSrcset = wrapper.find('[data-test="components-cover-story-image"]').element.getAttribute('srcset')

    expect(imageSrcset).toContain(image2X)
  })
})
