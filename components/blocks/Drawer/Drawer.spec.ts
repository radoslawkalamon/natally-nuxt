import merge from 'lodash/merge'
import { createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import Drawer from './Drawer.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Store({
  getters: {
    'blocks/drawer/shallOpenDrawer': jest.fn(() => true)
  },
  actions: {
    'blocks/drawer/closeDrawer': jest.fn(() => true)
  }
})

const defaultOptionsFactory = (options?: object) => merge({
  localVue,
  store,
  stubs: [
    'BlocksNavigationDrawer',
    'BlocksSocialMedia'
  ]
}, options)

describe('Blocks / Drawer', () => {
  shallRender(Drawer, defaultOptionsFactory())
})
