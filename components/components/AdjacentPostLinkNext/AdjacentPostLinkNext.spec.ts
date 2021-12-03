import AdjacentPostLinkNext from '@/components/components/AdjacentPostLinkNext/AdjacentPostLinkNext.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Components / Adjacent Post Link Next', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: AdjacentPostLinkNext,
      options: {
        propsData: {
          label: 'Następny',
          path: '/post/test-path/',
          title: 'Post testowy'
        }
      }
    })
  })
})
