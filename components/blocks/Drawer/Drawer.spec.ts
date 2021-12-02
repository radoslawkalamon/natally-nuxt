import Drawer from '@/components/blocks/Drawer/Drawer.vue'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory, createIntegrationTestWrapper, createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'
import { JestMockMatchMedia } from '@/devtools/jest.mock.matchMedia'

JestMockMatchMedia()

const defaultOptionsUnitFactory = createDefaultOptionsFactory({
  stubs: [
    'ComponentsNavigationDrawer',
    'ComponentsSocialMedia'
  ]
})

describe('Blocks / Drawer', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: Drawer,
      description: 'default',
      options: defaultOptionsUnitFactory()
    })

    shallPassUnitSanityTest({
      component: Drawer,
      description: 'shallOpenDrawer = true',
      options: defaultOptionsUnitFactory({
        data () {
          return {
            shallOpenDrawer: true
          }
        }
      })
    })

    test('shall show drawer when common/matchMedia/desktop/matches = true', async () => {
      const wrapper = await createUnitTestWrapper({
        component: Drawer,
        options: defaultOptionsUnitFactory()
      })

      // @ts-ignore
      wrapper.vm['common/matchMedia/desktop/onChange']({ matches: true } as MediaQueryListEvent)
      await wrapper.vm.$nextTick()
      expect(wrapper.html()).toMatchSnapshot()

      wrapper.destroy()
    })

    test('shall show & hide drawer on "blocks/drawer/toggleDrawer"', async () => {
      const wrapper = await createUnitTestWrapper({
        component: Drawer,
        options: defaultOptionsUnitFactory()
      })

      wrapper.vm.$root.$emit('blocks/drawer/toggleDrawer')
      await wrapper.vm.$nextTick()
      expect(wrapper.html()).toMatchSnapshot()

      wrapper.vm.$root.$emit('blocks/drawer/toggleDrawer')
      await wrapper.vm.$nextTick()
      expect(wrapper.html()).toMatchSnapshot()

      wrapper.destroy()
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: Drawer
    })

    test('shall hide drawer on navigation-item click', async () => {
      const wrapper = await createIntegrationTestWrapper({
        component: Drawer,
        options: {
          data () {
            return {
              shallOpenDrawer: true
            }
          }
        }
      })

      wrapper.get('[data-test="navigation-item"]').trigger('click')
      await wrapper.vm.$nextTick()
      expect(wrapper.html()).toMatchSnapshot()

      wrapper.destroy()
    })
  })
})
