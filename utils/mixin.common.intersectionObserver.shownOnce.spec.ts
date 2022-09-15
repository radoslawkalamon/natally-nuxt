import { shallPassMixinSanityTest } from '@/devtools/jest.common.spec'
import { createComponentFromMixin, createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'
import { JestMockIntersectionObserver } from '@/devtools/jest.mock.IntersectionObserver'
import mixinCommonIntersectionObserverShownOnce from '@/utils/mixin.common.intersectionObserver.shownOnce'

JestMockIntersectionObserver()

const mixinComponent = createComponentFromMixin<InstanceType<typeof mixinCommonIntersectionObserverShownOnce>>({
  mixin: mixinCommonIntersectionObserverShownOnce
})
type MixinComponentType = InstanceType<typeof mixinComponent>

describe('Utils / Mixins / Intersection Observer / Shown Once', () => {
  shallPassMixinSanityTest({
    mixin: mixinCommonIntersectionObserverShownOnce
  })

  test('shall change common/intersectionObserver/shownOnce to true, when callback called', async () => {
    const entries = [{ isIntersecting: true }] as IntersectionObserverEntry[]
    const observer = { disconnect: jest.fn() } as unknown as IntersectionObserver

    const wrapper = await createUnitTestWrapper<MixinComponentType>({ component: mixinComponent })
    wrapper.vm['common/intersectionObserver/observerCallback'](entries, observer)

    expect(wrapper.vm['common/intersectionObserver/shownOnce']).toBe(true)

    wrapper.destroy()
  })

  test('shall cache common/intersectionObserver/cacheKey when it is set to non empty string', async () => {
    const cacheTestKey = 'test-key'
    const entries = [{ isIntersecting: true }] as IntersectionObserverEntry[]
    const observer = { disconnect: jest.fn() } as unknown as IntersectionObserver

    const wrapperOne = await createUnitTestWrapper<MixinComponentType>({
      component: mixinComponent,
      options: {
        computed: {
          'common/intersectionObserver/cacheKey' (): string {
            return cacheTestKey
          }
        }
      }
    })
    wrapperOne.vm['common/intersectionObserver/observerCallback'](entries, observer)
    expect(wrapperOne.vm['common/intersectionObserver/shownOnce']).toBe(true)
    wrapperOne.destroy()

    const wrapperTwo = await createUnitTestWrapper<MixinComponentType>({
      component: mixinComponent,
      options: {
        computed: {
          'common/intersectionObserver/cacheKey' (): string {
            return cacheTestKey
          }
        }
      }
    })
    expect(wrapperTwo.vm['common/intersectionObserver/shallUseCache']).toBe(true)
    expect(wrapperTwo.vm['common/intersectionObserver/shownOnce']).toBe(true)
    wrapperTwo.destroy()
  })
})
