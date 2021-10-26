import NavigationDrawer from './NavigationDrawer.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('Blocks / Navigation Drawer', () => {
  const defaultOptions = {
    stubs: {
      WrappersNavigation: {
        template: '<nav data-stub="wrappers-navigation"><slot /></nav>'
      },
      ComponentsNavigationItemLink: {
        template: '<a href="#" data-stub="components-navigation-item-link" />'
      }
    }
  }

  shallRender(NavigationDrawer, defaultOptions)
})
