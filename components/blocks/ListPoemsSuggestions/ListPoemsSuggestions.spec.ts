import merge from 'lodash/merge'
import ListPoemsSuggestions from './ListPoemsSuggestions.vue'
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

describe('Blocks / List Poems Suggestions', () => {
  shallRender(ListPoemsSuggestions, defaultOptionsFactory())
})
