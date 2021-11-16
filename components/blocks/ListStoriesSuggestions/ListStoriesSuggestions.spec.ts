import { merge } from 'lodash'
import ListStoriesSuggestions from './ListStoriesSuggestions.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

const defaultOptionsFactory = (options?: object) => merge({
  stubs: [
    'WrappersSection',
    'ComponentsTitle',
    'WrappersListStories',
    'ComponentsCardStory',
    'ComponentsButtonLink'
  ]
}, options)

describe('Blocks / List Stories Suggestions', () => {
  shallRender(ListStoriesSuggestions, defaultOptionsFactory())
})
