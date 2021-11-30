import { shallPassMixinSanityTest } from '@/devtools/jest.common.spec'
import { createComponentFromMixin, createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'
import mixinPoemFirstTime from '@/utils/mixin.poem.firstTime'

const mixinComponent = createComponentFromMixin({
  mixin: mixinPoemFirstTime
})

describe('Utils / Mixins / Poem / First Time', () => {
  describe('SSR', () => {
    beforeAll(() => {
      process.client = false
    })

    shallPassMixinSanityTest({
      mixin: mixinPoemFirstTime
    })

    test('shall poem/firstTime/shallShow return false', async () => {
      const wrapper = await createUnitTestWrapper({ component: mixinComponent })
      // @ts-ignore: no mixinComponent typing?
      expect(wrapper.vm['poem/firstTime/shallShow']).toBeFalsy()

      wrapper.destroy()
    })
  })

  describe('Client', () => {
    beforeAll(() => {
      process.client = true
    })

    beforeEach(() => {
      jest.resetAllMocks()
    })

    shallPassMixinSanityTest({
      mixin: mixinPoemFirstTime
    })

    test('shall poem/firstTime/shallShow return true for no visits', async () => {
      Storage.prototype.getItem = jest.fn(() => null)

      const wrapper = await createUnitTestWrapper({ component: mixinComponent })
      // @ts-ignore: no mixinComponent typing?
      expect(wrapper.vm['poem/firstTime/shallShow']).toBeTruthy()

      wrapper.destroy()
    })

    test('shall poem/firstTime/shallShow return false for 3 visits', async () => {
      Storage.prototype.getItem = jest.fn(() => '3')

      const wrapper = await createUnitTestWrapper({ component: mixinComponent })
      // @ts-ignore: no mixinComponent typing?
      expect(wrapper.vm['poem/firstTime/shallShow']).toBeFalsy()

      wrapper.destroy()
    })

    test('shall poem/firstTime/countVisit pass "1" to localStorage for no visits', async () => {
      const spy = jest.spyOn(Storage.prototype, 'setItem')
      Storage.prototype.getItem = jest.fn(() => null)

      const wrapper = await createUnitTestWrapper({ component: mixinComponent })
      // @ts-ignore: no mixinComponent typing?
      wrapper.vm['poem/firstTime/countVisit']()
      expect(spy).toBeCalledWith('poem-first-time-visits', '1')

      wrapper.destroy()
    })

    test('shall poem/firstTime/countVisit pass "3" to localStorage for 2 visits', async () => {
      const spy = jest.spyOn(Storage.prototype, 'setItem')
      Storage.prototype.getItem = jest.fn(() => '2')

      const wrapper = await createUnitTestWrapper({ component: mixinComponent })
      // @ts-ignore: no mixinComponent typing?
      wrapper.vm['poem/firstTime/countVisit']()
      expect(spy).toBeCalledWith('poem-first-time-visits', '3')

      wrapper.destroy()
    })

    test('shall poem/firstTime/hideSection pass "3" to localStorage', async () => {
      const spy = jest.spyOn(Storage.prototype, 'setItem')
      Storage.prototype.getItem = jest.fn(() => null)

      const wrapper = await createUnitTestWrapper({ component: mixinComponent })
      // @ts-ignore: no mixinComponent typing?
      wrapper.vm['poem/firstTime/hideSection']()
      expect(spy).toBeCalledWith('poem-first-time-visits', '3')

      wrapper.destroy()
    })
  })
})
