import Vue from 'vue'
import type { VueConstructor } from 'vue'
import { mount } from '@vue/test-utils'
import mixinWindowScrollValues from '@/utils/mixin.windowScroll.values'

const Component = (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinWindowScrollValues>
>).extend({
  mixins: [mixinWindowScrollValues],
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

  test('shall update data on common/windowScroll', () => {
    const wrapper = mount(Component)
    // @ts-ignore: window.scrollY mock
    window.scrollY = 500
    wrapper.vm.$root.$emit('common/windowScroll')
    expect(wrapper.vm['common/windowScroll/scrollPosition']).toBeGreaterThan(0)
    expect(wrapper.vm['common/windowScroll/scrollDelta']).toBeGreaterThan(0)
  })
})
