import CoverStory from './CoverStory.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Blocks / Cover Story', () => {
  shallRender(CoverStory, {
    propsData: {
      images: [
        'https://www.fillmurray.com/600/300',
        'https://www.fillmurray.com/1200/600'
      ]
    },
    stubs: ['ComponentsCover']
  })
})
