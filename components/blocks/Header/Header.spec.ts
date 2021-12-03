import Header from '@/components/blocks/Header/Header.vue'
import { expectRootEmit, shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import type { Wrapper } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory, createIntegrationTestWrapper, createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'
import { JestMockMatchMedia } from '@/devtools/jest.mock.matchMedia'

JestMockMatchMedia()

const windowScrollTo = (scrollYPosition: number, wrapper: Wrapper) => {
  // @ts-ignore: window.scrollY mock
  window.scrollY = scrollYPosition
  wrapper.vm.$root.$emit('common/windowScroll')
}

const defaultOptionsUnitFactory = createDefaultOptionsFactory({
  stubs: [
    'ComponentsButtonHamburger',
    'ComponentsLogo'
  ]
})

describe('Blocks / Header', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: Header,
      options: defaultOptionsUnitFactory()
    })

    test('shall show when isDrawerOpen and scrolled down', async () => {
      const wrapper = await createUnitTestWrapper({
        component: Header,
        options: defaultOptionsUnitFactory({
          data () {
            return {
              isDrawerOpen: true
            }
          }
        })
      })

      windowScrollTo(500, wrapper)
      await wrapper.vm.$nextTick()
      expect(wrapper.get('[data-test="block-header"]').isVisible()).toBe(true)

      wrapper.destroy()
    })

    test('shall hide when scrolled beyond threshold', async () => {
      const wrapper = await createUnitTestWrapper({
        component: Header,
        options: defaultOptionsUnitFactory()
      })

      windowScrollTo(500, wrapper)
      await wrapper.vm.$nextTick()
      expect(wrapper.get('[data-test="block-header"]').isVisible()).toBe(false)

      wrapper.destroy()
    })

    test('shall show when scrolled beyond threshold and scrolled up', async () => {
      const wrapper = await createUnitTestWrapper({
        component: Header,
        options: defaultOptionsUnitFactory()
      })

      windowScrollTo(500, wrapper)
      await wrapper.vm.$nextTick()
      windowScrollTo(300, wrapper)
      await wrapper.vm.$nextTick()
      expect(wrapper.get('[data-test="block-header"]').isVisible()).toBe(true)

      wrapper.destroy()
    })

    test('shall show when on desktop when scrolled beyond threshold', async () => {
      const wrapper = await createUnitTestWrapper({
        component: Header,
        options: defaultOptionsUnitFactory()
      })

      // @ts-ignore
      wrapper.vm['common/matchMedia/desktop/onChange']({ matches: true } as MediaQueryListEvent)
      windowScrollTo(500, wrapper)
      await wrapper.vm.$nextTick()
      expect(wrapper.get('[data-test="block-header"]').isVisible()).toBe(true)

      wrapper.destroy()
    })

    test('shall sync drawer state', async () => {
      const wrapper = await createUnitTestWrapper({
        component: Header,
        options: defaultOptionsUnitFactory()
      })

      wrapper.vm.$root.$emit('blocks/drawer/syncDrawerState', true)
      windowScrollTo(500, wrapper)
      await wrapper.vm.$nextTick()
      expect(wrapper.get('[data-test="block-header"]').isVisible()).toBe(true)

      wrapper.destroy()
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: Header
    })

    test('shall toggle drawer when hamburger clicked', async () => {
      const wrapper = await createIntegrationTestWrapper({
        component: Header
      })

      wrapper.get('[data-test="blocks-header-button"]').trigger('click')
      expectRootEmit({
        name: 'blocks/drawer/toggleDrawer',
        wrapper
      })

      wrapper.destroy()
    })

    test('shall close drawer when logo clicked', async () => {
      const wrapper = await createIntegrationTestWrapper({
        component: Header
      })

      wrapper.vm.$root.$emit('blocks/drawer/syncDrawerState', true)
      await wrapper.vm.$nextTick()
      wrapper.get('[data-test="blocks-header-logo"]').trigger('click')
      expectRootEmit({
        name: 'blocks/drawer/toggleDrawer',
        wrapper
      })

      wrapper.destroy()
    })
  })
})
