import Footer from './Footer.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Blocks / Footer', () => {
  const defaultOptions = {
    stubs: {
      BlocksNavigationFooter: {
        template: '<nav data-stub="blocks-navigation-footer"><slot /></nav>'
      },
      ComponentsLogoCrustyBread: {
        template: '<img src="./crusty-bread-logo.svg" data-stub="components-logo-crusty-bread" />'
      },
      WrappersText: {
        template: '<div data-stub="wrappers-text"><slot /></div>'
      }
    }
  }

  shallRender(Footer, defaultOptions)
})
