import TextBase from './Text.vue'
import { shallHaveSlot, shallRender } from '@/utils/commonTestSpecs'

describe('Wrappers/Text Stories', () => {
  shallRender(TextBase, 'wrappers-text')
  shallHaveSlot(TextBase, 'default')
})
