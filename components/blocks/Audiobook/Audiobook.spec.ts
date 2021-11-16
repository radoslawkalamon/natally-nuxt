import { createLocalVue, mount } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import { merge } from 'lodash'
import Audiobook from './Audiobook.vue'
import { getPrivacyStorageValue } from '@/utils/privacy.storage'

jest.mock('@/utils/privacy.storage', () => ({
  getPrivacyStorageValue: jest.fn(() => true),
  PrivacyStorageItems: jest.fn()
}))

const localVue = createLocalVue()
localVue.use(Vuex)

const storeConfig = {
  actions: {
    'blocks/ModalPrivacy/toggleModalPrivacy': jest.fn()
  }
}
const store = new Store(storeConfig)

const defaultOptionsFactory = (options?: object) => merge({
  localVue,
  store,
  propsData: {
    id: '1234567890'
  },
  stubs: [
    'WrappersText',
    'ClientOnly'
  ]
}, options)

describe('Blocks / Audiobook', () => {
  test('shall render prompt', (): void => {
    (getPrivacyStorageValue as jest.Mock).mockImplementation(() => false)

    const wrapper = mount(Audiobook, defaultOptionsFactory())
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('shall render iframe', (): void => {
    (getPrivacyStorageValue as jest.Mock).mockImplementation(() => true)

    const wrapper = mount(Audiobook, defaultOptionsFactory())
    expect(wrapper.html()).toMatchSnapshot()
  })
})
