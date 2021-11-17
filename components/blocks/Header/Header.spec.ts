import flushPromises from 'flush-promises'
import merge from 'lodash/merge'
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'

import Header from './Header.vue'
import { shallDestroy, shallRender } from '@/devtools/jest.shared.spec'

const localVue = createLocalVue()
localVue.use(Vuex)

const storeConfig = {
  getters: {
    'matchMedia/isDesktop': jest.fn(() => false),
    'blocks/drawer/shallOpenDrawer': jest.fn(() => false)
  },
  actions: {
    'blocks/drawer/toggleDrawer': jest.fn()
  }
}
const store = new Store(storeConfig)

const defaultOptionsFactory = (options?: object) => merge({
  attachTo: document.body,
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

  test('shall trigger toggleDrawer when ComponentsButtonHamburger clicked', async () => {
    const wrapper = mount(Header, defaultOptionsFactory({
      stubs: ['NuxtLink']
    }))
    await flushPromises()
    wrapper.get('[data-test="blocks-header-button"]').trigger('click')
    expect(storeConfig.actions['blocks/drawer/toggleDrawer']).toHaveBeenCalled()
  })
})
