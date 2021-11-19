import LoadingBar from './LoadingBar.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Blocks / Loading Bar', () => {
  shallRender(LoadingBar)
})
