import { createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import ModalPrivacy from './ModalPrivacy.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

const localVue = createLocalVue()
localVue.use(Vuex)

const storeConfig = {
  getters: {
    'blocks/ModalPrivacy/shallOpenModalPrivacy': jest.fn(() => true)
  }
}
const store = new Store(storeConfig)

describe('Blocks / Modal Privacy', () => {
  const defaultOptions = {
    localVue,
    store,
    stubs: [
      'WrappersModal',
      'ComponentsSwitch',
      'ComponentsButton'
    ]
  }

  shallRender(ModalPrivacy, defaultOptions)
})
