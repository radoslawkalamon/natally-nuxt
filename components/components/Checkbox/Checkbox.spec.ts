import { merge } from 'lodash'
import { mount } from '@vue/test-utils'
import Checkbox from './Checkbox.vue'
import { shallClickTriggerEvent, shallHaveStringProp, shallRender } from '@/utils/commonTestSpecs'

describe('Components / Checkbox', () => {
  const defaultOptions = {
    propsData: {
      label: 'Test label',
      name: 'test-name'
    }
  }

  shallRender(Checkbox, defaultOptions)
  shallHaveStringProp(Checkbox, 'label', defaultOptions)
  shallClickTriggerEvent(Checkbox, 'toggle', defaultOptions)

  test('shall disabled wrapper click not trigger toggle event', (): void => {
    const wrapper = mount(Checkbox, merge(defaultOptions, {
      propsData: {
        disabled: true
      }
    }))
    wrapper.trigger('click')
    const toggleCalls = wrapper.emitted('toggle') || []
    expect(toggleCalls).toHaveLength(0)
  })

  test('shall disabled: false have no influence over component', (): void => {
    const wrapper = mount(Checkbox, merge(defaultOptions, {
      propsData: {
        disabled: false
      }
    }))
    const disabledElement = wrapper.find('[disabled]')
    expect(disabledElement.exists()).toBeFalsy()
  })

  test('shall disabled: true have influence over component', (): void => {
    const wrapper = mount(Checkbox, merge(defaultOptions, {
      propsData: {
        disabled: true
      }
    }))
    const disabledElement = wrapper.find('[disabled]')
    expect(disabledElement.exists()).toBeTruthy()
  })

  test('shall have for="test-name" and name="test-name" elements', () => {
    const wrapper = mount(Checkbox, defaultOptions)
    const forElement = wrapper.find('[for="test-name"]')
    const nameElement = wrapper.find('[name="test-name"]')
    expect(forElement).toBeTruthy()
    expect(nameElement).toBeTruthy()
  })
})
