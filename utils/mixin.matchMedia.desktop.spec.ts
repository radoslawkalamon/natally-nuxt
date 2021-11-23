import Vue from 'vue'
import type { VueConstructor } from 'vue'
import { mount } from '@vue/test-utils'
import { jestPolyfillMatchMedia } from '@/devtools/jest.mock.matchMedia'
import mixinMatchMediaDesktop from '@/utils/mixin.matchMedia.desktop'

const Component = (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinMatchMediaDesktop>
>).extend({
  mixins: [mixinMatchMediaDesktop],
  template: '<div />'
})

describe('Utils / Mixins / MatchMedia / Desktop', () => {
  beforeAll(() => {
    jestPolyfillMatchMedia()
  })

  test('shall mount & destroy', () => {
    expect(() => {
      const wrapper = mount(Component)
      wrapper.destroy()
    }).not.toThrowError()
  })

  test('shall update common/matchMedia/desktop/matches when common/matchMedia/desktop/onChange called', () => {
    const e: Pick<MediaQueryListEvent, 'matches'> = {
      matches: true
    }
    const wrapper = mount(Component)
    wrapper.vm['common/matchMedia/desktop/onChange'](e as MediaQueryListEvent)
    expect(wrapper.vm['common/matchMedia/desktop/matches']).toBeTruthy()
  })
})
