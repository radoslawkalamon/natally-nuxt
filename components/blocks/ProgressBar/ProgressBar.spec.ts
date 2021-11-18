import ProgressBar from './ProgressBar.vue'
import { shallDestroy, shallRender } from '@/devtools/jest.shared.spec'

describe('Blocks / Progress Bar', () => {
  shallRender(ProgressBar)
  shallDestroy(ProgressBar)
})
