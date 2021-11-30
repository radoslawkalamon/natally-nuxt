import { expectRootEmit, shallPassMixinSanityTest } from '@/devtools/jest.common.spec'
import { createComponentFromMixin, createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'
import mixinCommonWindowScrollEmitter from '@/utils/mixin.common.windowScroll.emitter'

jest.mock('lodash/throttle', () => (cb: Function) => cb)

const mixinComponent = createComponentFromMixin({
  mixin: mixinCommonWindowScrollEmitter
})

describe('Utils / Mixins / windowScroll / Emitter', () => {
  shallPassMixinSanityTest({
    mixin: mixinCommonWindowScrollEmitter
  })

  test('shall emit common/windowScroll on window scroll event', async () => {
    const wrapper = await createUnitTestWrapper({ component: mixinComponent })
    window.dispatchEvent(new CustomEvent('scroll'))
    expectRootEmit({
      name: 'common/windowScroll',
      wrapper
    })
    wrapper.destroy()
  })
})
