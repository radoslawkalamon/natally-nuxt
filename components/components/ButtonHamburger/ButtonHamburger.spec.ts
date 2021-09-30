import { mount } from '@vue/test-utils'
import ButtonHamburger from './ButtonHamburger.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('Components / Button Hamburger', () => {
  const defaultOptions = {
    propsData: {
      isOpen: false
    }
  }

  shallRender(ButtonHamburger, 'components-button-hamburger', defaultOptions)

  test('shall click trigger toggle event', () => {
    const wrapper = mount(ButtonHamburger, defaultOptions)
    wrapper.trigger('click')
    const toggleCalls = wrapper.emitted('toggle')
    expect(toggleCalls).toHaveLength(1)
  })

  test('shall state change aria-label', async () => {
    const wrapper = mount(ButtonHamburger, defaultOptions)
    const closedAriaLabel = wrapper.element.getAttribute('aria-label') || ''
    await wrapper.setProps({ isOpen: true })
    const openedAriaLabel = wrapper.element.getAttribute('aria-label') || ''
    expect(closedAriaLabel).not.toMatch(openedAriaLabel)
  })

  test('shall state change data-open', async () => {
    const wrapper = mount(ButtonHamburger, defaultOptions)
    expect(wrapper.find('[data-open="false"]').isVisible()).toBeTruthy()
    await wrapper.setProps({ isOpen: true })
    expect(wrapper.find('[data-open="true"]').isVisible()).toBeTruthy()
  })
})
