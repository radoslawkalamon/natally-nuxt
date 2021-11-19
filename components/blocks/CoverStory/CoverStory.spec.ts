import CoverStory from './CoverStory.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Blocks / Cover Story', () => {
  shallRender(CoverStory, {
    propsData: {
      image: 'https://www.fillmurray.com/600/300',
      image2x: 'https://www.fillmurray.com/1200/600'
    },
    stubs: ['ComponentsCover']
  })
})
