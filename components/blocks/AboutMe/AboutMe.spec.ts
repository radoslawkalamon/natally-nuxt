import AboutMe from './AboutMe.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

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
