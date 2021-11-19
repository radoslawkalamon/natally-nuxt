import ProgressBar from './ProgressBar.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Components / Progress Bar', () => {
  shallRender(ProgressBar, {
    propsData: {
      width: 25
    }
  })
})
