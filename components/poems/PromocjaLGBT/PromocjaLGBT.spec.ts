import PromocjaLGBT from '@/components/poems/PromocjaLGBT/PromocjaLGBT.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'

jest.mock('lodash/throttle', () => (cb: Function) => cb)
jest.useFakeTimers()

process.client = true

describe('Poems / Promocja LGBT', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: PromocjaLGBT
    })

    test('shall change slide after 3 seconds', async () => {
      const wrapper = await createUnitTestWrapper({
        component: PromocjaLGBT
      })
      jest.advanceTimersByTime(3000)
      await wrapper.vm.$nextTick()
      expect(wrapper.html()).toMatchSnapshot()
      wrapper.destroy()
    })

    test('shall Buy Now button trigger animation, then after 2 seconds it shall be hidden', async () => {
      const wrapper = await createUnitTestWrapper({
        component: PromocjaLGBT
      })
      wrapper.get('[data-test="promocja-lgbt-buy-now-button"]').trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.findAll('[data-test="promocja-lgbt-heart"]')).toHaveLength(69)
      jest.advanceTimersByTime(2000)
      await wrapper.vm.$nextTick()
      expect(wrapper.findAll('[data-test="promocja-lgbt-heart"]')).toHaveLength(0)
      wrapper.destroy()
    })
  })
})
