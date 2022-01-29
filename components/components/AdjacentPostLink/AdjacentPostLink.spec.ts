import AdjacentPostLink from '@/components/components/AdjacentPostLink/AdjacentPostLink.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory } from '@/devtools/jest.common.spec.utils'

const defaultOptionsFactory = createDefaultOptionsFactory({
  propsData: {
    path: '/post/test-path/',
    title: 'Post testowy'
  }
})

describe('Components / Adjacent Post Link', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: AdjacentPostLink,
      description: 'Next',
      options: defaultOptionsFactory({
        propsData: {
          label: 'Następny',
          type: 'next'
        }
      })
    })

    shallPassUnitSanityTest({
      component: AdjacentPostLink,
      description: 'Previous',
      options: defaultOptionsFactory({
        propsData: {
          label: 'Poprzedni',
          type: 'previous'
        }
      })
    })
  })
})
