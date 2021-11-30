import { createComponentFromMixin, createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'
import mixinCommonWindowScrollValues from '@/utils/mixin.common.windowScroll.values'
import { shallPassMixinSanityTest } from '@/devtools/jest.common.spec'

jest.mock('lodash/throttle', () => (cb: Function) => cb)

const mixinComponent = createComponentFromMixin({
  mixin: mixinCommonWindowScrollValues
})

describe('Utils / Mixins / windowScroll / Values', () => {
  shallPassMixinSanityTest({
    mixin: mixinCommonWindowScrollValues
  })

  test('shall update data on common/windowScroll', async () => {
    const wrapper = await createUnitTestWrapper({
      component: mixinComponent
    })
    // @ts-ignore: window.scrollY mock
    window.scrollY = 500
    wrapper.vm.$root.$emit('common/windowScroll')
    // @ts-ignore: no mixinComponent typing?
    expect(wrapper.vm['common/windowScroll/scrollPosition']).toBeGreaterThan(0)
    // @ts-ignore: no mixinComponent typing?
    expect(wrapper.vm['common/windowScroll/scrollDelta']).toBeGreaterThan(0)
  })
})
