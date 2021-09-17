import { mount } from '@vue/test-utils'
import TextBase from './Text.vue'

describe('Wrappers/Text', () => {
  test('is renderable', () => {
    const wrapper = mount(TextBase)
    expect(wrapper.find('[data-test="wrappers-text"]').isVisible()).toBeTruthy()
  })

  test('has default slot', () => {
    const slotText = 'This is slot test!'
    const wrapper = mount(TextBase, {
      slots: {
        default: slotText
      }
    })
    expect(wrapper.html()).toContain(slotText)
  })
})
