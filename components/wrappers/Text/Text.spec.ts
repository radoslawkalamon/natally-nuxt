import TextBase from './Text.vue'
import { shallHaveSlot, shallRender } from '@/utils/commonTestSpecs'

describe('Wrappers / Text', () => {
  shallRender(TextBase)
  shallHaveSlot(TextBase, 'default')
})
