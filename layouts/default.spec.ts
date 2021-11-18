import merge from 'lodash/merge'
import { createWrapper, mount } from '@vue/test-utils'
import LayoutDefault from './default.vue'
import { shallDestroy, shallRender } from '@/devtools/jest.shared.spec'

jest.mock('lodash/throttle', () => (cb: Function) => cb)

const defaultOptionsFactory = (options?: object) => merge({
  attachTo: document.body,
  stubs: [
    'BlocksHeader',
    'BlocksDrawer',
    'WrappersMain',
    'Nuxt',
    'BlocksFooter',
    'BlocksModalPrivacy'
  ]
}, options)

describe('Layouts / Default', () => {
  shallRender(LayoutDefault, defaultOptionsFactory())
  shallDestroy(LayoutDefault, defaultOptionsFactory())

  test('shall emit common/windowScroll on window scroll event', () => {
    const wrapper = mount(LayoutDefault, defaultOptionsFactory())
    window.dispatchEvent(new CustomEvent('scroll'))
    const rootWrapper = createWrapper(wrapper.vm.$root)
    const windowScrollCalls = rootWrapper.emitted('common/windowScroll')
    expect(windowScrollCalls).toBeTruthy()
  })
})
