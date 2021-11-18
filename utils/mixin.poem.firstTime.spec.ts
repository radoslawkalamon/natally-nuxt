import Vue from 'vue'
import type { VueConstructor } from 'vue'
import { mount } from '@vue/test-utils'
import mixinPoemFirstTime from '@/utils/mixin.poem.firstTime'

const Component = (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinPoemFirstTime>
>).extend({
  mixins: [mixinPoemFirstTime],
  template: '<div />'
})

describe('Mixins / Poem / First Time', () => {
  describe('SSR', () => {
    beforeAll(() => {
      process.client = false
    })

    test('shall poem/firstTime/shallShow return false', () => {
      const wrapper = mount(Component)
      expect(wrapper.vm['poem/firstTime/shallShow']).toBeFalsy()
    })
  })

  describe('Client', () => {
    beforeAll(() => {
      process.client = true
    })

    test('shall poem/firstTime/shallShow return true for no visits', () => {
      Storage.prototype.getItem = jest.fn(() => null)
      const wrapper = mount(Component)
      expect(wrapper.vm['poem/firstTime/shallShow']).toBeTruthy()
    })

    test('shall poem/firstTime/shallShow return false for 3 visits', () => {
      Storage.prototype.getItem = jest.fn(() => '3')
      const wrapper = mount(Component)
      expect(wrapper.vm['poem/firstTime/shallShow']).toBeFalsy()
    })

    test('shall poem/firstTime/countVisit pass "1" to localStorage for no visits', () => {
      const spy = jest.spyOn(Storage.prototype, 'setItem')
      Storage.prototype.getItem = jest.fn(() => null)

      const wrapper = mount(Component)
      wrapper.vm['poem/firstTime/countVisit']()

      expect(spy).toBeCalledWith('poem-first-time-visits', '1')
    })

    test('shall poem/firstTime/countVisit pass "3" to localStorage for 2 visits', () => {
      const spy = jest.spyOn(Storage.prototype, 'setItem')
      Storage.prototype.getItem = jest.fn(() => '2')

      const wrapper = mount(Component)
      wrapper.vm['poem/firstTime/countVisit']()

      expect(spy).toBeCalledWith('poem-first-time-visits', '3')
    })

    test('shall poem/firstTime/hideSection pass "3" to localStorage', () => {
      const spy = jest.spyOn(Storage.prototype, 'setItem')
      Storage.prototype.getItem = jest.fn(() => null)

      const wrapper = mount(Component)
      wrapper.vm['poem/firstTime/countVisit']()

      expect(spy).toBeCalledWith('poem-first-time-visits', '3')
    })
  })
})
