import AdjacentPostLinkPrevious from '@/components/components/AdjacentPostLinkPrevious/AdjacentPostLinkPrevious.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Components / Adjacent Post Link Previous', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: AdjacentPostLinkPrevious,
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
