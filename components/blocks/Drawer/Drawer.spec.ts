import merge from 'lodash/merge'
import Drawer from './Drawer.vue'
import { shallRender } from '@/devtools/jest.shared.spec'
import { JestMockMatchMedia } from '@/devtools/jest.mock.matchMedia'

const defaultOptionsFactory = (options?: object) => merge({
  stubs: [
    'ComponentsNavigationDrawer',
    'ComponentsSocialMedia'
  ]
}, options)

describe('Blocks / Drawer', () => {
  beforeAll(() => {
    JestMockMatchMedia()
  })

  shallRender(Drawer, defaultOptionsFactory())
})
