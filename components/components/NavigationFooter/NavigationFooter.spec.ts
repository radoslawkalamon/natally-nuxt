import NavigationFooter from '@/components/components/NavigationFooter/NavigationFooter.vue'
import { expectRootEmit, shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createIntegrationTestWrapper } from '@/devtools/jest.common.spec.utils'

describe('Components / Navigation Footer', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: NavigationFooter,
      options: {
        stubs: [
          'ComponentsButtonText',
          'ComponentsLinkText',
          'WrappersNavigation'
        ]
      }
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({ component: NavigationFooter })

    test('shall $root emit privacy/modal/toggle when [data-test="open-privacy-modal"] clicked', async () => {
      const wrapper = await createIntegrationTestWrapper({ component: NavigationFooter })
      wrapper.get('[data-test="open-privacy-modal"]').trigger('click')
      expectRootEmit({
        name: 'privacy/modal/toggle',
        wrapper
      })
      wrapper.destroy()
    })
  })
})
