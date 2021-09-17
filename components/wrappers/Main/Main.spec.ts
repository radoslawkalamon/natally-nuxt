import { mount } from '@vue/test-utils'
import Main from './Main.vue'

describe('Wrappers/Main', () => {
  test('is renderable', () => {
    const wrapper = mount(Main)
    expect(wrapper.find('[data-test="main"]').isVisible()).toBeTruthy()
  })

  test('Default slot', () => {
    const slotText = 'This is slot test!';
    const wrapper = mount(Main, {
      slots: {
        default: slotText
      }
    })
    expect(wrapper.html()).toContain(slotText)
  })
})
