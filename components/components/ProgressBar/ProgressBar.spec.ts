import ProgressBar from '@/components/components/ProgressBar/ProgressBar.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Components / Progress Bar', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: ProgressBar,
      options: {
        propsData: {
          width: 25
        }
      }
    })
  })
})
