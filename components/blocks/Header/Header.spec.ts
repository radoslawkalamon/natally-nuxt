import { mount } from '@vue/test-utils'
import lodash from 'lodash'
import Header from './Header.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('Blocks / Header', () => {
  const defaultOptions = {
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

  describe('Lifecycle methods', () => {
    test('shall call addEventListener on mounted', () => {
      const addEventListenerSpy = jest.spyOn(window, 'addEventListener')
      mount(Header, defaultOptions)
      expect(addEventListenerSpy).toHaveBeenCalled()
      addEventListenerSpy.mockReset()
    })

    test('shall call throttle on mounted', () => {
      const throttleSpy = jest.spyOn(lodash, 'throttle')
      mount(Header, defaultOptions)
      expect(throttleSpy).toHaveBeenCalled()
      throttleSpy.mockReset()
    })

    test('shall call removeEventListener on beforeDestroy', () => {
      const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener')
      const wrapper = mount(Header, defaultOptions)
      wrapper.destroy()
      expect(removeEventListenerSpy).toHaveBeenCalled()
      removeEventListenerSpy.mockReset()
    })
  })
})
