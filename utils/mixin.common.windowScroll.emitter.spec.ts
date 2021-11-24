import Vue from 'vue'
import type { VueConstructor } from 'vue'
import { mount, createWrapper } from '@vue/test-utils'
import mixinCommonWindowScrollEmitter from '@/utils/mixin.common.windowScroll.emitter'

const Component = (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinCommonWindowScrollEmitter>
>).extend({
  mixins: [mixinCommonWindowScrollEmitter],
  template: '<div />'
})

jest.mock('lodash/throttle', () => (cb: Function) => cb)

describe('Utils / Mixins / windowScroll / Emitter', () => {
  test('shall mount & destroy', () => {
    expect(() => {
      const wrapper = mount(Component)
      wrapper.destroy()
    }).not.toThrowError()
  })

  test('shall emit common/windowScroll on window scroll event', () => {
    const wrapper = mount(Component, {
      attachTo: document.body
    })
    window.dispatchEvent(new CustomEvent('scroll'))
    const rootWrapper = createWrapper(wrapper.vm.$root)
    const windowScrollCalls = rootWrapper.emitted('common/windowScroll')
    expect(windowScrollCalls).toBeTruthy()
  })
})
