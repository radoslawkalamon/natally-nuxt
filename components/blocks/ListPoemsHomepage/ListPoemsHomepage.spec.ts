import merge from 'lodash/merge'
import ListPoemsHomepage from './ListPoemsHomepage.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

const defaultOptionsFactory = (options?: object) => merge({
  stubs: [
    'WrappersSection',
    'ComponentsTitle',
    'WrappersListPoems',
    'ComponentsCardPoem',
    'ComponentsButtonLink'
  ]
}, options)

describe('Blocks / List Poems Homepage', () => {
  shallRender(ListPoemsHomepage, defaultOptionsFactory())
})
