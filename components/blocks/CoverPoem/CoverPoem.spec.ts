import CoverPoem from './CoverPoem.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Blocks / Cover Poem', () => {
  shallRender(CoverPoem, {
    propsData: {
      images: [
        '/images/post.test-post.1x.jpg'
      ]
    },
    stubs: ['ComponentsCover']
  })
})
