import { merge } from 'lodash'
import ListStoriesMain from './ListStoriesMain.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

const defaultOptionsFactory = (options?: object) => merge({
  stubs: [
    'WrappersSection',
    'ComponentsTitle',
    'WrappersListStories',
    'ComponentsCardStory'
  ]
}, options)

describe('Blocks / List Stories Main', () => {
  shallRender(ListStoriesMain, defaultOptionsFactory())
})
