import { shallPassMixinSanityTest } from '@/devtools/jest.common.spec'
import { createComponentFromMixin, createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'
import { JestMockIntersectionObserver } from '@/devtools/jest.mock.IntersectionObserver'
import mixinCommonIntersectionObserverShownOnce from '@/utils/mixin.common.intersectionObserver.shownOnce'

JestMockIntersectionObserver()

const mixinComponent = createComponentFromMixin({
  mixin: mixinCommonIntersectionObserverShownOnce
})

describe('Utils / Mixins / Intersection Observer / Shown Once', () => {
  shallPassMixinSanityTest({
    mixin: mixinCommonIntersectionObserverShownOnce
  })

  test('shall change common/intersectionObserver/shownOnce to true, when callback called', async () => {
    const wrapper = await createUnitTestWrapper({ component: mixinComponent })
    // @ts-ignore: no mixinComponent typing?
    wrapper.vm['common/intersectionObserver/observerCallback'](
      [{ isIntersecting: true }],
      { disconnect: jest.fn() }
    )
    // @ts-ignore: no mixinComponent typing?
    expect(wrapper.vm['common/intersectionObserver/shownOnce']).toBeTruthy()

    wrapper.destroy()
  })
})
