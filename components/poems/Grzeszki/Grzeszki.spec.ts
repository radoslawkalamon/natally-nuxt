import Grzeszki from '@/components/poems/Grzeszki/Grzeszki.vue'
import { createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'

describe('Poems / Grzeszki', () => {
  describe('Unit', () => {
    test('shall pass unit sanity test', () => {
      expect(async () => {
        const wrapper = await createUnitTestWrapper({
          component: Grzeszki
        })
        wrapper.destroy()
      }).not.toThrowError()
    })

    test('shall breadcrumbs have applied styles', async () => {
      const wrapper = await createUnitTestWrapper({
        component: Grzeszki
      })
      wrapper.findAll('[data-test="poems-grzeszki-breadcrumb"]').wrappers
        .forEach((breadcrumb) => {
          // @ts-ignore
          const elementStyleLeft = Number.parseFloat(breadcrumb.element.style.left)
          // @ts-ignore
          const elementStyleTop = Number.parseFloat(breadcrumb.element.style.top)
          expect(elementStyleLeft).toBeGreaterThanOrEqual(0)
          expect(elementStyleLeft).toBeLessThanOrEqual(100)
          expect(elementStyleTop).toBeGreaterThanOrEqual(0)
          expect(elementStyleTop).toBeLessThanOrEqual(100)
        })
      wrapper.destroy()
    })
  })
})
