import ProgressBar from './ProgressBar.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Blocks / Progress Bar', () => {
  shallRender(ProgressBar)
})
