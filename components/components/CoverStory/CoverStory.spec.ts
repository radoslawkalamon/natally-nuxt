import { mount } from '@vue/test-utils'
import CoverStory from './CoverStory.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('Components / Cover Story', () => {
  const defaultOptions = {
    propsData: {
      alternativeText: 'Lorem ipsum',
      image: 'https://via.placeholder.com/600x300.webp',
      image2X: 'https://via.placeholder.com/1200x600.webp'
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
    const image = 'https://via.placeholder.com/300x150.webp'
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
    const image2X = 'https://via.placeholder.com/500x250.webp'
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
