import { createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import Drawer from './Drawer.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Store({
  getters: {
    'blocks/drawer/shallOpenDrawer': jest.fn(() => true)
  }
})

describe('Blocks / Drawer', () => {
  const defaultOptions = {
    localVue,
    store,
    stubs: {
      BlocksNavigationDrawer: {
        template: '<div data-stub="blocks-navigation-drawer" />'
      },
      BlocksSocialMedia: {
        template: '<div data-stub="blocks-social-media" />'
      }
    }
  }

  shallRender(Drawer, defaultOptions)
})
