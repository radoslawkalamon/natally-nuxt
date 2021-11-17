import Vue from 'vue'
import type { VueConstructor } from 'vue'
import { mount, createWrapper } from '@vue/test-utils'
import mixinWindowScrollEmitter from '@/utils/mixin.windowScroll.emitter'

const Component = (Vue as VueConstructor<
  Vue &
  InstanceType<typeof mixinWindowScrollEmitter>
>).extend({
  mixins: [mixinWindowScrollEmitter],
  template: '<div />'
})

jest.mock('lodash/throttle', () => (cb: Function) => cb)

describe('Mixins / windowScroll / Emitter', () => {
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
