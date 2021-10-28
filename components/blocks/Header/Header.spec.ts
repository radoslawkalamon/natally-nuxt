import { mount } from '@vue/test-utils'
import Header from './Header.vue'
import { shallDestroy, shallRender } from '@/utils/commonTestSpecs'
import jestMatchMediaPolyfill from '@/utils/jest.matchMedia.polyfill'

describe('Blocks / Header', () => {
  const defaultOptions = {
    attachTo: document.body,
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

  beforeAll(() => {
    jestMatchMediaPolyfill()
    jest.useFakeTimers()
  })

  shallRender(Header, defaultOptions)
  shallDestroy(Header, defaultOptions)

  test('shall onScroll be called on a scroll event', () => {
    expect(() => {
      mount(Header, defaultOptions)
      window.dispatchEvent(new CustomEvent('scroll'))
      jest.runAllTimers()
    }).not.toThrowError()
  })
})
