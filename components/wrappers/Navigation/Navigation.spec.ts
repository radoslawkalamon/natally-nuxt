import Navigation from '@/components/wrappers/Navigation/Navigation.vue'
import { shallPassIntegrationSanityTest } from '@/devtools/jest.common.spec'

describe('Wrappers / Navigation', () => {
  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: Navigation,
      description: 'with children',
      options: {
        slots: {
          default: [
            { template: '<span>Tag child 1</span>' },
            'Text child',
            { template: '<span>Tag child 2</span>' }
          ]
        }
      }
    })

    shallPassIntegrationSanityTest({
      component: Navigation,
      description: 'no children'
    })
  })
})
