import Footer from './Footer.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Blocks / Footer', () => {
  const defaultOptions = {
    stubs: [
      'ComponentsNavigationFooter',
      'ComponentsLogoCrustyBread',
      'WrappersText'
    ]
  }

  shallRender(Footer, defaultOptions)
})
