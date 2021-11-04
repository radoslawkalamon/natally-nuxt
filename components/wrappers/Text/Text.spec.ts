import TextBase from './Text.vue'
import { shallHaveSlot, shallRender } from '@/devtools/jest.shared.spec'

describe('Wrappers / Text', () => {
  shallRender(TextBase)
  shallHaveSlot(TextBase, 'default')
})
