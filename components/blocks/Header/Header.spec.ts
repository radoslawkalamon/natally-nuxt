import merge from 'lodash/merge'
import { createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'

import Header from './Header.vue'
import { shallDestroy, shallRender } from '@/devtools/jest.shared.spec'

const localVue = createLocalVue()
localVue.use(Vuex)

const storeConfig = {
  getters: {
    'matchMedia/isDesktop': jest.fn(() => false)
  }
}
const store = new Store(storeConfig)

const defaultOptionsFactory = (options?: object) => merge({
  localVue,
  store,
  stubs: [
    'ComponentsButtonHamburger',
    'NuxtLink',
    'ComponentsLogo'
  ]
}, options)

describe('Blocks / Header', () => {
  shallRender(Header, defaultOptionsFactory())
  shallDestroy(Header, defaultOptionsFactory())
})
