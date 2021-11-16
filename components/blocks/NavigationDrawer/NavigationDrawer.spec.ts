import merge from 'lodash/merge'
import NavigationDrawer from './NavigationDrawer.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

const defaultOptionsFactory = (options?: object) => merge({
  stubs: [
    'WrappersNavigation',
    'ComponentsNavigationItemLink'
  ]
}, options)

describe('Blocks / Navigation Drawer', () => {
  shallRender(NavigationDrawer, defaultOptionsFactory())
})
