import mixinPrivacyStorage from '@/utils/mixin.privacy.storage'
import { createComponentFromMixin, createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'
import { shallPassMixinSanityTest } from '@/devtools/jest.common.spec'

const mixinComponent = createComponentFromMixin<InstanceType<typeof mixinPrivacyStorage>>({
  mixin: mixinPrivacyStorage
})
type MixinComponentType = InstanceType<typeof mixinComponent>

describe('Utils / Mixins / Privacy / Storage', () => {
  shallPassMixinSanityTest({
    mixin: mixinPrivacyStorage
  })

  describe('Core', () => {
    test('get', async () => {
      const wrapper = await createUnitTestWrapper<MixinComponentType>({ component: mixinComponent })

      expect(wrapper.vm['privacy/storage/getCore']).toBe(true)

      wrapper.destroy()
    })
  })

  describe('Soundcloud', () => {
    beforeEach(() => {
      jest.resetAllMocks()
    })

    test('get default', async () => {
      process.client = false

      const wrapper = await createUnitTestWrapper<MixinComponentType>({ component: mixinComponent })

      expect(wrapper.vm['privacy/storage/getSoundcloud']).toBe(false)

      wrapper.destroy()
    })

    test('get from Local Storage', async () => {
      process.client = true
      Storage.prototype.getItem = jest.fn(() => '1')

      const wrapper = await createUnitTestWrapper<MixinComponentType>({ component: mixinComponent })

      expect(wrapper.vm['privacy/storage/getSoundcloud']).toBe(true)

      wrapper.destroy()
    })

    test('set', async () => {
      const spy = jest.spyOn(Storage.prototype, 'setItem')

      const wrapper = await createUnitTestWrapper<MixinComponentType>({ component: mixinComponent })
      wrapper.vm['privacy/storage/setSoundcloud'](true)

      expect(spy).toBeCalledWith('privacy-settings-soundcloud', '1')

      wrapper.destroy()
    })
  })
})
