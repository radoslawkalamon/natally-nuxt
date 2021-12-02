import ListPoemsMain from '@/components/blocks/ListPoemsMain/ListPoemsMain.vue'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Blocks / List Poems Main', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: ListPoemsMain,
      options: {
        stubs: ['WrappersListPoems']
      }
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: ListPoemsMain
    })
  })
})
