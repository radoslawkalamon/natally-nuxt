import { createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import Drawer from './Drawer.vue'
import { shallRender } from '@/utils/commonTestSpecs'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Store({
  getters: {
    'drawer/shallOpenDrawer': jest.fn(() => true)
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