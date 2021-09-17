import { mount } from '@vue/test-utils'
import CrustyBreadLogo from './CrustyBreadLogo.vue'

describe('Components/CrustyBreadLogo', () => {
  test('is renderable', () => {
    const wrapper = mount(CrustyBreadLogo)
    expect(wrapper.find('[data-test="components-crusty-bread-logo"]').isVisible()).toBeTruthy()
  })
})
