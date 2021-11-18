import Vue from 'vue'
import type { VueConstructor } from 'vue'
import { mount } from '@vue/test-utils'
import mixinPrivacyStorage from '@/utils/mixin.privacy.storage'

const Component = (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinPrivacyStorage>
>).extend({
  mixins: [mixinPrivacyStorage],
  template: '<div />'
})

describe('Mixins / Privacy / Storage', () => {
  describe('Core', () => {
    test('get', () => {
      const wrapper = mount(Component)
      expect(wrapper.vm['privacy/storage/getCore']).toBeTruthy()
    })
  })

  describe('Soundcloud', () => {
    test('get', () => {
      process.client = true
      Storage.prototype.getItem = jest.fn(() => '1')
      const wrapper = mount(Component)
      expect(wrapper.vm['privacy/storage/getSoundcloud']).toBeTruthy()
    })

    test('set', () => {
      const spy = jest.spyOn(Storage.prototype, 'setItem')
      const wrapper = mount(Component)
      wrapper.vm['privacy/storage/setSoundcloud'](true)
      expect(spy).toBeCalledWith('privacy-settings-soundcloud', '1')
    })
  })
})
