import { mount } from '@vue/test-utils'
import Checkbox from './Checkbox.vue'
import { shallHaveStringProp, shallRender } from '@/devtools/jest.shared.spec'

describe('Components / Checkbox', () => {
  const defaultOptions = {
    propsData: {
      label: 'Test label',
      name: 'test-name'
    }
  }

  shallRender(Checkbox, defaultOptions)
  shallHaveStringProp(Checkbox, 'label', defaultOptions)

  test('shall have for="test-name" and name="test-name" elements', () => {
    const wrapper = mount(Checkbox, defaultOptions)
    const forElement = wrapper.find('[for="test-name"]')
    const nameElement = wrapper.find('[name="test-name"]')
    expect(forElement).toBeTruthy()
    expect(nameElement).toBeTruthy()
  })
})
