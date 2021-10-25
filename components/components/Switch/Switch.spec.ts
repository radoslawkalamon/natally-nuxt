import { merge } from 'lodash'
import { mount } from '@vue/test-utils'
import Switch from './Switch.vue'
import { shallHaveStringProp, shallRender } from '@/utils/commonTestSpecs'

describe('Components / Switch', () => {
  const defaultOptions = {
    propsData: {
      checked: false,
      label: 'Test label',
      name: 'test-name'
    },
    stubs: {
      WrappersText: {
        template: '<div><slot /></div>'
      }
    }
  }

  shallRender(Switch, defaultOptions)
  shallHaveStringProp(Switch, 'label', defaultOptions)

  test('shall input click trigger toggle event', (): void => {
    const wrapper = mount(Switch, defaultOptions)
    const input = wrapper.find('[data-test="components-switch-input"]')
    input.trigger('click')
    const toggleCalls = wrapper.emitted('toggle')
    expect(toggleCalls).toHaveLength(1)
  })

  test('shall disabled input click not trigger toggle event', (): void => {
    const wrapper = mount(Switch, merge(defaultOptions, {
      propsData: {
        disabled: true
      }
    }))
    const input = wrapper.find('[data-test="components-switch-input"]')
    input.trigger('click')
    const toggleCalls = wrapper.emitted('toggle') || []
    expect(toggleCalls).toHaveLength(0)
  })

  test('shall disabled: false have no influence over component', (): void => {
    const wrapper = mount(Switch, merge(defaultOptions, {
      propsData: {
        disabled: false
      }
    }))
    const disabledElement = wrapper.find('[disabled]')
    expect(disabledElement.exists()).toBeFalsy()
  })

  test('shall disabled: true have influence over component', (): void => {
    const wrapper = mount(Switch, merge(defaultOptions, {
      propsData: {
        disabled: true
      }
    }))
    const disabledElement = wrapper.find('[disabled]')
    expect(disabledElement.exists()).toBeTruthy()
  })

  test('shall have for="test-name" and name="test-name" elements', () => {
    const wrapper = mount(Switch, defaultOptions)
    const forElement = wrapper.find('[for="test-name"]')
    const nameElement = wrapper.find('[name="test-name"]')
    expect(forElement).toBeTruthy()
    expect(nameElement).toBeTruthy()
  })
})
