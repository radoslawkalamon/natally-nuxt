import { mount } from '@vue/test-utils'
import ButtonHamburger from './ButtonHamburger.vue'
import { shallRender, shallClickTriggerEvent } from '@/devtools/jest.shared.spec'

describe('Components / Button Hamburger', () => {
  const defaultOptions = {
    propsData: {
      isOpen: false
    }
  }

  shallRender(ButtonHamburger, defaultOptions)
  shallClickTriggerEvent(ButtonHamburger, 'toggle', defaultOptions)

  test('shall state change aria-label', async (): Promise<void> => {
    const wrapper = mount(ButtonHamburger, defaultOptions)
    const closedAriaLabel = wrapper.element.getAttribute('aria-label') || ''
    await wrapper.setProps({ isOpen: true })
    const openedAriaLabel = wrapper.element.getAttribute('aria-label') || ''
    expect(closedAriaLabel).not.toMatch(openedAriaLabel)
  })

  test('shall state change data-open', async (): Promise<void> => {
    const wrapper = mount(ButtonHamburger, defaultOptions)
    expect(wrapper.find('[data-open="false"]').isVisible()).toBeTruthy()
    await wrapper.setProps({ isOpen: true })
    expect(wrapper.find('[data-open="true"]').isVisible()).toBeTruthy()
  })
})
