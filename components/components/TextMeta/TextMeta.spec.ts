import TextMeta from '@/components/components/TextMeta/TextMeta.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Components / Text Meta', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: TextMeta,
      options: {
        propsData: {
          text: 'Default Prop Text'
        }
      }
    })
  })
})
