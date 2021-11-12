import { merge } from 'lodash'
import ListPoemsSuggestions from './ListPoemsSuggestions.vue'
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

describe('Blocks / List Poems Suggestions', () => {
  shallRender(ListPoemsSuggestions, defaultOptionsFactory())
})
