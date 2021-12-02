import { shallPassMixinSanityTest } from '@/devtools/jest.common.spec'
import { createComponentFromMixin, createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'
import { JestMockMatchMedia } from '@/devtools/jest.mock.matchMedia'
import mixinCommonMatchMediaDesktop from '@/utils/mixin.common.matchMedia.desktop'

JestMockMatchMedia()

const mixinComponent = createComponentFromMixin<InstanceType<typeof mixinCommonMatchMediaDesktop>>({
  mixin: mixinCommonMatchMediaDesktop
})
type MixinComponentType = InstanceType<typeof mixinComponent>

describe('Utils / Mixins / MatchMedia / Desktop', () => {
  shallPassMixinSanityTest({
    mixin: mixinCommonMatchMediaDesktop
  })

  test('shall update common/matchMedia/desktop/matches when common/matchMedia/desktop/onChange called', async () => {
    const e: Pick<MediaQueryListEvent, 'matches'> = {
      matches: true
    }

    const wrapper = await createUnitTestWrapper<MixinComponentType>({ component: mixinComponent })
    wrapper.vm['common/matchMedia/desktop/onChange'](e as MediaQueryListEvent)

    expect(wrapper.vm['common/matchMedia/desktop/matches']).toBeTruthy()

    wrapper.destroy()
  })
})
