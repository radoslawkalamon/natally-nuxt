import { createLocalVue, createWrapper, mount } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import LayoutDefault from './default.vue'
import { shallDestroy, shallRender } from '@/devtools/jest.shared.spec'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Store({
  actions: {
    'matchMedia/init': jest.fn()
  }
})

describe('Layouts / Default', () => {
  const defaultOptions = {
    attachTo: document.body,
    localVue,
    store,
    stubs: [
      'BlocksHeader',
      'BlocksDrawer',
      'WrappersMain',
      'Nuxt',
      'BlocksFooter',
      'BlocksModalPrivacy'
    ]
  }

  beforeAll(() => {
    jest.useFakeTimers()
  })

  shallRender(LayoutDefault, defaultOptions)
  shallDestroy(LayoutDefault, defaultOptions)

  test('shall emit common/windowScroll on window scroll event', () => {
    const wrapper = mount(LayoutDefault, defaultOptions)

    window.dispatchEvent(new CustomEvent('scroll'))
    jest.runAllTimers()

    const rootWrapper = createWrapper(wrapper.vm.$root)
    const windowScrollCalls = rootWrapper.emitted('common/windowScroll')
    expect(windowScrollCalls).toBeTruthy()
  })
})
