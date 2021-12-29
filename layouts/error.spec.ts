import Error from '@/layouts/error.vue'
import { shallPassIntegrationSanityTest } from '@/devtools/jest.common.spec'

describe('Page / Error', () => {
  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: Error,
      options: {}
    })
  })
})
