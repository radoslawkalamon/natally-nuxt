// import { mount } from '@vue/test-utils'
import NavigationFooter from './NavigationFooter.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('Blocks / Navigation Footer', () => {
  const defaultOptions = {
    stubs: {
      WrappersNavigation: {
        template: '<nav data-stub="wrappers-navigation"><slot /></nav>'
      },
      ComponentsNavigationItem: {
        template: '<a href="#" data-stub="components-navigation-item" />'
      },
      ComponentsNavigationItemLink: {
        template: '<a href="#" data-stub="components-navigation-item-link" />'
      }
    }
  }

  shallRender(NavigationFooter, defaultOptions)

  // test('shall click on [data-test="blocks-navigation-footer-privacy-modal"] open privacy modal', () => {
  //   @TODO: Issue #153
  //
  //   const wrapper = mount(NavigationFooter, defaultOptions)
  //   const openPrivacyModal = wrapper.find('[data-test="blocks-navigation-footer-privacy-modal"]')
  //   openPrivacyModal.trigger('click')
  //   // const isActionCalled = ...
  //   expect(isActionCalled).toBeTruthy()
  // })
})
