import merge from 'lodash/merge'
import Drawer from './Drawer.vue'
import { shallRender } from '@/devtools/jest.shared.spec'
import { jestPolyfillMatchMedia } from '@/devtools/jest.mock.matchMedia'

const defaultOptionsFactory = (options?: object) => merge({
  stubs: [
    'ComponentsNavigationDrawer',
    'BlocksSocialMedia'
  ]
}, options)

describe('Blocks / Drawer', () => {
  beforeAll(() => {
    jestPolyfillMatchMedia()
  })

  shallRender(Drawer, defaultOptionsFactory())
})
