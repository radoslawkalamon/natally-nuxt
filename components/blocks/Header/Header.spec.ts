import { createLocalVue, mount } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import Header from './Header.vue'
import { shallDestroy, shallRender } from '@/utils/commonTestSpecs'

const localVue = createLocalVue()
localVue.use(Vuex)

const storeConfig = {
  getters: {
    'blocks/drawer/shallOpenDrawer': jest.fn(() => false),
    'blocks/header/shallShowHeader': jest.fn(() => true)
  },
  actions: {
    'blocks/drawer/toggleDrawer': jest.fn(),
    'blocks/header/updateScrollYPosition': jest.fn()
  }
}
const store = new Store(storeConfig)

describe('Blocks / Header', () => {
  const defaultOptions = {
    attachTo: document.body,
    localVue,
    store,
    stubs: {
      ComponentsButtonHamburger: {
        template: '<button data-stub="components-button-hamburger">=</button>'
      },
      NuxtLink: {
        template: '<a data-stub="nuxt-link" href="#"><slot /></a>'
      },
      ComponentsLogo: {
        template: '<img src="./blog-logo.svg" data-stub="components-logo" />'
      }
    }
  }

  shallRender(Header, defaultOptions)
  shallDestroy(Header, defaultOptions)

  test('shall trigger blocks/header/updateScrollYPosition on common/windowScroll', () => {
    const wrapper = mount(Header, defaultOptions)
    storeConfig.actions['blocks/header/updateScrollYPosition'].mockReset()
    wrapper.vm.$root.$emit('common/windowScroll')
    expect(storeConfig.actions['blocks/header/updateScrollYPosition']).toBeCalled()
  })
})
