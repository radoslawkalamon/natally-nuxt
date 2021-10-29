import { createWrapper, mount } from '@vue/test-utils'
import LayoutDefault from './default.vue'
import { shallDestroy, shallRender } from '@/utils/commonTestSpecs'

describe('Layouts / Default', () => {
  const defaultOptions = {
    attachTo: document.body,
    stubs: {
      BlocksHeader: {
        template: '<header data-stub="blocks-header" />'
      },
      BlocksDrawer: {
        template: '<div data-stub="blocks-drawer"><slot /></div>'
      },
      WrappersMain: {
        template: '<div data-stub="wrappers-main"><slot /></div>'
      },
      Nuxt: {
        template: '<div data-stub="nuxt" />'
      },
      BlocksFooter: {
        template: '<footer data-stub="blocks-footer" />'
      }
    }
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
