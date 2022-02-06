import Link from '@/components/components/Link/Link.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Components / Link', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: Link,
      description: 'General Type',
      options: {
        propsData: {
          label: 'Item label',
          to: '/test-path/',
          type: 'general'
        }
      }
    })

    shallPassUnitSanityTest({
      component: Link,
      description: 'Button Type',
      options: {
        propsData: {
          label: 'Item label',
          to: '/test-path/',
          type: 'button'
        }
      }
    })
  })
})
