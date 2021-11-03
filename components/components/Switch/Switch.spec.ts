import { mount } from '@vue/test-utils'
import Switch from './Switch.vue'
import { shallHaveStringProp, shallHaveSlot, shallHideSlotWhenNoChildren, shallRender } from '@/devtools/jest.shared.spec'

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
  shallHideSlotWhenNoChildren(Switch, 'default', 'components-switch-description', defaultOptions)
  shallHaveSlot(Switch, 'default', defaultOptions)

  test('shall have for="test-name" and name="test-name" elements', () => {
    const wrapper = mount(Switch, defaultOptions)
    const forElement = wrapper.find('[for="test-name"]')
    const nameElement = wrapper.find('[name="test-name"]')
    expect(forElement.exists()).toBeTruthy()
    expect(nameElement.exists()).toBeTruthy()
  })
})
