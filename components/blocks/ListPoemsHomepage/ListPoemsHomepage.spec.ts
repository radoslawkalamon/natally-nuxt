import { merge } from 'lodash'
import ListPoemsHomepage from './ListPoemsHomepage.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

const defaultOptionsFactory = (options?: object) => merge({
  stubs: [
    'WrappersSection',
    'ComponentsTitle',
    'WrappersListPoems',
    'ComponentsCardPoem',
    'ComponentsButtonLink',
    'ComponentsCardPoemPlaceholder'
  ]
}, options)

describe('Blocks / List Poems Homepage', () => {
  shallRender(ListPoemsHomepage, defaultOptionsFactory())
})
