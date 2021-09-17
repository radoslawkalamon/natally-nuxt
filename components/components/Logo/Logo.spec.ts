import { mount } from '@vue/test-utils'
import Logo from './Logo.vue'

describe('Components/Logo', () => {
  test('is renderable', () => {
    const wrapper = mount(Logo)
    expect(wrapper.find('[data-test="components-logo"]').isVisible()).toBeTruthy()
  })
})
