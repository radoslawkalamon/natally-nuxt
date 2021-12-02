import { shallPassMixinSanityTest } from '@/devtools/jest.common.spec'
import { createComponentFromMixin, createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'
import mixinCommonWindowScrollValues from '@/utils/mixin.common.windowScroll.values'

jest.mock('lodash/throttle', () => (cb: Function) => cb)

const mixinComponent = createComponentFromMixin<InstanceType<typeof mixinCommonWindowScrollValues>>({
  mixin: mixinCommonWindowScrollValues
})
type MixinComponentType = InstanceType<typeof mixinComponent>

describe('Utils / Mixins / windowScroll / Values', () => {
  shallPassMixinSanityTest({
    mixin: mixinCommonWindowScrollValues
  })

  test('shall update data on common/windowScroll', async () => {
    const wrapper = await createUnitTestWrapper<MixinComponentType>({ component: mixinComponent })

    // @ts-ignore: window.scrollY mock
    window.scrollY = 500

    wrapper.vm.$root.$emit('common/windowScroll')

    expect(wrapper.vm['common/windowScroll/scrollPosition']).toBeGreaterThan(0)
    expect(wrapper.vm['common/windowScroll/scrollDelta']).toBeGreaterThan(0)

    wrapper.destroy()
  })
})
