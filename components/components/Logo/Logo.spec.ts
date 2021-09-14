import { mount } from '@vue/test-utils'
import Logo from '@/components/components/Logo/Logo.vue'

describe('Components/Logo', () => {
  test('is renderable', () => {
    const wrapper = mount(Logo)
    expect(wrapper.find('[data-test="logo"]').isVisible()).toBeTruthy()
  })
})
