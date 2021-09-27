import Vue from 'vue'
import { mount } from '@vue/test-utils'

export function shallRender (component: typeof Vue, dataTestID: string, defaultOptions?: object) {
  test('shall render', () => {
    const wrapper = mount(component, defaultOptions)
    const isWrapperVisible = wrapper.find(`[data-test="${dataTestID}"]`).isVisible()
    expect(isWrapperVisible).toBeTruthy()
  })
}

export function shallHaveSlot (component: typeof Vue, slot: string, defaultOptions?: object) {
  test(`shall have slot '${slot}'`, () => {
    const text = `This is slot '${slot}' test.`
    const wrapper = mount(component, {
      ...defaultOptions,
      slots: {
        [slot]: text
      }
    })
    expect(wrapper.html()).toContain(text)
  })
}

export function shallHaveStringProp (component: typeof Vue, propName: string, defaultOptions?: object) {
  test(`shall have string prop '${propName}''`, () => {
    const text = `This is prop ${propName} test.`
    const wrapper = mount(component, {
      ...defaultOptions,
      propsData: {
        [propName]: text
      }
    })
    expect(wrapper.html()).toContain(text)
  })
}
