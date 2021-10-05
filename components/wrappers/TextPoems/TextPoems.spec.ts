import TextPoems from './TextPoems.vue'
import { shallHaveSlot, shallRender } from '@/utils/commonTestSpecs'

describe('Wrappers / Text Poems', () => {
  const defaultOptions = {
    stubs: {
      WrappersText: {
        template: '<div><slot /></div>'
      }
    }
  }

  shallRender(TextPoems, defaultOptions)
  shallHaveSlot(TextPoems, 'default', defaultOptions)
})
