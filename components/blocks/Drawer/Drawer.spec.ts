import Drawer from './Drawer.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('Blocks / Drawer', () => {
  const defaultOptions = {
    stubs: {
      BlocksNavigationDrawer: {
        template: '<div data-stub="blocks-navigation-drawer" />'
      },
      BlocksSocialMedia: {
        template: '<div data-stub="blocks-social-media" />'
      }
    }
  }

  shallRender(Drawer, defaultOptions)
})
