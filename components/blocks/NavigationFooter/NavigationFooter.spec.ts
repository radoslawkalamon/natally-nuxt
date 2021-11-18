import NavigationFooter from './NavigationFooter.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Blocks / Navigation Footer', () => {
  const defaultOptions = {
    stubs: [
      'WrappersNavigation',
      'ComponentsButtonText',
      'ComponentsLinkText'
    ]
  }

  shallRender(NavigationFooter, defaultOptions)
})
