import NavigationDrawer from '@/components/components/NavigationDrawer/NavigationDrawer.vue'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createIntegrationTestWrapper } from '@/devtools/jest.common.spec.utils'

describe('Components / Navigation Drawer', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: NavigationDrawer,
      options: {
        stubs: [
          'ComponentsLink',
          'WrappersNavigation'
        ]
      }
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({ component: NavigationDrawer })

    test('shall emit navigationItemClick when [data-test="navigation-item"] clicked', async () => {
      const wrapper = await createIntegrationTestWrapper({ component: NavigationDrawer })
      wrapper.get('[data-test="navigation-item"]').trigger('click')
      const navigationItemEmit = wrapper.emitted('navigationItemClick')
      expect(navigationItemEmit).toBeTruthy()
      wrapper.destroy()
    })
  })
})
