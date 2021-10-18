import CoverStory from './CoverStory.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('Components / Cover Story', () => {
  const defaultOptions = {
    propsData: {
      image: 'https://www.fillmurray.com/600/300',
      image2x: 'https://www.fillmurray.com/1200/600'
    }
  }

  shallRender(CoverStory, defaultOptions)

  // test("shall have string prop 'image' & 'image2x' influence over style", (): void => {
  //   const wrapper = mount(CoverStory, defaultOptions)
  //   const styleWrapper = wrapper.element.getAttribute('style') || ''
  //   expect(styleWrapper).toContain('https://www.fillmurray.com/600/300')
  //   expect(styleWrapper).toContain('https://www.fillmurray.com/1200/600')
  // })
})
