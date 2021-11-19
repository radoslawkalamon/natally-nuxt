import ReadingProgress from './ReadingProgress.vue'
import { shallDestroy, shallRender } from '@/devtools/jest.shared.spec'

describe('Blocks / Reading Progress', () => {
  shallRender(ReadingProgress)
  shallDestroy(ReadingProgress)
})
