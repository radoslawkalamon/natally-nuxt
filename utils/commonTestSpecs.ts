import Vue from 'vue'
import { mount } from '@vue/test-utils'
import { merge } from 'lodash'

export function shallRender (component: typeof Vue, dataTestID: string, defaultOptions?: object): void {
  test('shall render', (): void => {
    const wrapper = mount(component, defaultOptions)
    const isWrapperVisible = wrapper.find(`[data-test="${dataTestID}"]`).isVisible()
    expect(isWrapperVisible).toBeTruthy()
  })
}

export function shallHaveSlot (component: typeof Vue, slot: string, defaultOptions?: object): void {
  test(`shall have slot '${slot}'`, (): void => {
    const text = `This is slot '${slot}' test.`
    const wrapperOptions = merge(defaultOptions, {
      slots: {
        [slot]: text
      }
    })
    const wrapper = mount(component, wrapperOptions)
    expect(wrapper.html()).toContain(text)
  })
}

export function shallHaveStringProp (component: typeof Vue, propName: string, defaultOptions?: object): void {
  test(`shall have string prop '${propName}'`, (): void => {
    const text = `This is prop ${propName} test.`
    const wrapperOptions = merge(defaultOptions, {
      propsData: {
        [propName]: text
      }
    })
    const wrapper = mount(component, wrapperOptions)
    expect(wrapper.html()).toContain(text)
  })
}

export function shallHavePropInfluenceOverClassNames (
  component: typeof Vue,
  propName: string,
  propValue: unknown,
  classNameSuffix: string,
  defaultOptions?: object
) {
  test(`shall have ${typeof propValue} prop '${propName}' influence over class names`, () => {
    const wrapperOptions = merge(defaultOptions, {
      propsData: {
        [propName]: propValue
      }
    })
    const wrapper = mount(component, wrapperOptions)
    const isWrapperHaveClass = wrapper.classes().some(cls => cls.includes(classNameSuffix))
    expect(isWrapperHaveClass).toBeTruthy()
  })
}
