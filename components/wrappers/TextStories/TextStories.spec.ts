import { mount } from '@vue/test-utils'
import TextStories from './TextStories.vue'

describe('Wrappers/Text Stories', () => {
  test('is renderable', () => {
    const wrapper = mount(TextStories)
    expect(wrapper.find('[data-test="wrappers-text-stories"]').isVisible()).toBeTruthy()
  })

  test('has default slot', () => {
    const slotText = 'This is slot test!'
    const wrapper = mount(TextStories, {
      slots: {
        default: slotText
      }
    })
    expect(wrapper.html()).toContain(slotText)
  })
})
