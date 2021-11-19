import merge from 'lodash/merge'
import ListPoemsMain from './ListPoemsMain.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

const defaultOptionsFactory = (options?: object) => merge({
  stubs: [
    'WrappersListPoems',
    'ComponentsCardPoem'
  ]
}, options)

describe('Blocks / List Poems Main', () => {
  shallRender(ListPoemsMain, defaultOptionsFactory())
})
