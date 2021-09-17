import { mount } from '@vue/test-utils'
import TextPoems from './TextPoems.vue'

describe('Wrappers/Text Poems', () => {
  const stubs = {
    WrappersText: { template: '<div><slot /></div>' }
  }

  test('is renderable', () => {
    const wrapper = mount(TextPoems, {
      stubs
    })
    expect(wrapper.find('[data-test="wrappers-text-poems"]').isVisible()).toBeTruthy()
  })

  test('has default slot', () => {
    const slotText = 'This is slot test!'
    const wrapper = mount(TextPoems, {
      slots: {
        default: slotText
      },
      stubs
    })
    expect(wrapper.html()).toContain(slotText)
  })
})
