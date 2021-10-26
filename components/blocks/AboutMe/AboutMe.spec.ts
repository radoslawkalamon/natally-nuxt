import AboutMe from './AboutMe.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('Blocks / About Me', () => {
  const defaultOptions = {
    stubs: {
      WrappersText: {
        template: '<div><slot /></div>'
      }
    }
  }

  shallRender(AboutMe, defaultOptions)
})
