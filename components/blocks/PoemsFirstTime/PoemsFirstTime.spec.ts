import merge from 'lodash/merge'
import PoemsFirstTime from '@/components/blocks/PoemsFirstTime/PoemsFirstTime.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

const defaultOptionsFactory = (options?: object) => merge({
  stubs: [
    'ClientOnly',
    'WrappersSection',
    'WrappersText',
    'ComponentsButtonLink'
  ]
}, options)

describe('Blocks / Poems First Time', () => {
  beforeAll(() => {
    process.client = true
  })

  shallRender(PoemsFirstTime, defaultOptionsFactory())
})
