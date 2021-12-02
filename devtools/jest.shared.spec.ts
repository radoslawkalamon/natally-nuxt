import Vue from 'vue'
import { mount } from '@vue/test-utils'
import merge from 'lodash/merge'

export function shallRender (component: typeof Vue, defaultOptions?: object): void {
  test('shall render', (): void => {
    const wrapper = mount(component, defaultOptions)
    const isWrapperVisible = wrapper.isVisible()
    expect(isWrapperVisible).toBe(true)
  })
}

export function shallDestroy (component: typeof Vue, defaultOptions?: object): void {
  test('shall destroy', (): void => {
    expect(() => {
      const wrapper = mount(component, defaultOptions)
      wrapper.destroy()
    }).not.toThrowError()
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

export function shallHideSlotWhenNoChildren (component: typeof Vue, slot: string, dataTestSelector: string, defaultOptions?: object): void {
  test(`shall hide slot '${slot}' when no children passed`, (): void => {
    const wrapperOptions = merge(defaultOptions)
    const wrapper = mount(component, wrapperOptions)
    const slot = wrapper.find(`[data-test="${dataTestSelector}"]`)
    expect(slot.exists()).toBe(false)
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
    expect(isWrapperHaveClass).toBe(true)
  })
}

export function shallClickTriggerEvent (component: typeof Vue, eventName: string, defaultOptions?: object) {
  test(`shall click trigger ${eventName} event`, (): void => {
    const wrapper = mount(component, defaultOptions)
    wrapper.trigger('click')
    const toggleCalls = wrapper.emitted(eventName)
    expect(toggleCalls).toHaveLength(1)
  })
}
