import { mount } from '@vue/test-utils'
import TextMeta from './TextMeta.vue'

describe('Wrappers/Text Meta', () => {
  test('is renderable', () => {
    const wrapper = mount(TextMeta, {
      propsData: {
        text: 'is renderable'
      }
    })
    expect(wrapper.find('[data-test="components-text-meta"]').isVisible()).toBeTruthy()
  })

  test('has text prop & renders it', () => {
    const propText = 'This is prop test!'
    const wrapper = mount(TextMeta, {
      propsData: {
        text: propText
      }
    })
    expect(wrapper.html()).toContain(propText)
  })
})
