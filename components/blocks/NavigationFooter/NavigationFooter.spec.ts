import { createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import NavigationFooter from './NavigationFooter.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

const localVue = createLocalVue()
localVue.use(Vuex)

const storeConfig = {
  actions: {
    'blocks/ModalPrivacy/toggleModalPrivacy': jest.fn()
  }
}
const store = new Store(storeConfig)

describe('Blocks / Navigation Footer', () => {
  const defaultOptions = {
    localVue,
    store,
    stubs: {
      WrappersNavigation: {
        template: '<nav data-stub="wrappers-navigation"><slot /></nav>'
      },
      ComponentsNavigationItem: {
        template: '<a href="#" data-stub="components-navigation-item" />'
      },
      ComponentsNavigationItemLink: {
        template: '<a href="#" data-stub="components-navigation-item-link" />'
      }
    }
  }

  shallRender(NavigationFooter, defaultOptions)
})
