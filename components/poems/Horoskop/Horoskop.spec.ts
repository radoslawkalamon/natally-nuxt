import Horoskop from '@/components/poems/Horoskop/Horoskop.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'

jest.mock('lodash/throttle', () => (cb: Function) => cb)
jest.useFakeTimers()

describe('Poems / Horoskop', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: Horoskop
    })

    test('shall zodiac click trigger animation | snapshots check', async () => {
      const wrapper = await createUnitTestWrapper({
        component: Horoskop
      })
      wrapper.get('[data-test="horoskop-zodiac-button"]').trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.html()).toMatchSnapshot()

      jest.advanceTimersByTime(9000)
      await wrapper.vm.$nextTick()
      expect(wrapper.html()).toMatchSnapshot()

      jest.advanceTimersByTime(3000)
      await wrapper.vm.$nextTick()
      expect(wrapper.html()).toMatchSnapshot()

      jest.advanceTimersByTime(2000)
      await wrapper.vm.$nextTick()
      expect(wrapper.html()).toMatchSnapshot()

      wrapper.destroy()
    })

    test('shall reset click trigger component reset', async () => {
      const wrapper = await createUnitTestWrapper({
        component: Horoskop
      })
      wrapper.get('[data-test="horoskop-zodiac-button"]').trigger('click')
      jest.advanceTimersByTime(15000)
      await wrapper.vm.$nextTick()

      expect(wrapper.html()).toMatchSnapshot()

      wrapper.get('[data-test="horoskop-reset-button"]').trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.html()).toMatchSnapshot()

      wrapper.destroy()
    })
  })
})
