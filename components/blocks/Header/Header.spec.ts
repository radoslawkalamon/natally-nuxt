import merge from 'lodash/merge'
import Header from './Header.vue'
import { shallDestroy, shallRender } from '@/devtools/jest.shared.spec'
import { JestMockMatchMedia } from '@/devtools/jest.mock.matchMedia'

const defaultOptionsFactory = (options?: object) => merge({
  stubs: [
    'ComponentsButtonHamburger',
    'NuxtLink',
    'ComponentsLogo'
  ]
}, options)

describe('Blocks / Header', () => {
  beforeAll(() => {
    JestMockMatchMedia()
  })

  shallRender(Header, defaultOptionsFactory())
  shallDestroy(Header, defaultOptionsFactory())
})
