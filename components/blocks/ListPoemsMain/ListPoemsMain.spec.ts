import { merge } from 'lodash'
import ListPoemsMain from './ListPoemsMain.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Blocks / List Poems Main', () => {
  shallRender(ListPoemsMain)
})

const defaultOptionsFactory = (options?: object) => merge({
  stubs: [
    'WrappersListPoems',
    'ComponentsCardPoem'
  ]
}, options)

describe('Blocks / List Poems Main', () => {
  shallRender(ListPoemsMain, defaultOptionsFactory())
})
