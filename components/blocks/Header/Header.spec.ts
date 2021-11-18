import merge from 'lodash/merge'
import Header from './Header.vue'
import { shallDestroy, shallRender } from '@/devtools/jest.shared.spec'
import { jestPolyfillMatchMedia } from '@/devtools/jest.mock.matchMedia'

const defaultOptionsFactory = (options?: object) => merge({
  stubs: [
    'ComponentsButtonHamburger',
    'NuxtLink',
    'ComponentsLogo'
  ]
}, options)

describe('Blocks / Header', () => {
  beforeAll(() => {
    jestPolyfillMatchMedia()
  })

  shallRender(Header, defaultOptionsFactory())
  shallDestroy(Header, defaultOptionsFactory())
})
