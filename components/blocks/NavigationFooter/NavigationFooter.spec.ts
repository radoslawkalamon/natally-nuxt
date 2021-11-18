import NavigationFooter from './NavigationFooter.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Blocks / Navigation Footer', () => {
  const defaultOptions = {
    stubs: [
      'WrappersNavigation',
      'ComponentsNavigationItem',
      'ComponentsLinkText'
    ]
  }

  shallRender(NavigationFooter, defaultOptions)
})
