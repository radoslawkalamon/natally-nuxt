import { createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import ModalPrivacy from './ModalPrivacy.vue'
import { shallRender } from '@/utils/commonTestSpecs'

const localVue = createLocalVue()
localVue.use(Vuex)

const storeConfig = {
  getters: {
    'blocks/ModalPrivacy/getCookieCore': jest.fn(() => 1),
    'blocks/ModalPrivacy/getCookieSoundcloud': jest.fn(() => 0),
    'blocks/ModalPrivacy/shallOpenModalPrivacy': jest.fn(() => true)
  },
  actions: {
    'blocks/ModalPrivacy/applyCookieSettings': jest.fn(),
    'blocks/ModalPrivacy/updateCookieSoundcloud': jest.fn()
  }
}
const store = new Store(storeConfig)

describe('Blocks / Modal Privacy', () => {
  const defaultOptions = {
    localVue,
    store,
    stubs: {
      WrappersModal: {
        template: '<div data-stub="wrappers-modal"><slot /></div>'
      },
      ComponentsSwitch: {
        template: '<input type="checkbox" data-stub="components-switch">'
      },
      ComponentsButton: {
        template: '<button type="button" data-stub="components-button" />'
      }
    }
  }

  shallRender(ModalPrivacy, defaultOptions)
})
