import { merge } from 'lodash'
import AdjacentPostLinkPrevious from './AdjacentPostLinkPrevious.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

const defaultOptionsFactory = (options?: object) => merge({
  propsData: {
    label: 'Poprzedni',
    path: '/post/test-path/',
    title: 'Post testowy'
  },
  stubs: [
    'NuxtLink'
  ]
}, options)

describe('Components / Adjacent Post Link Previous', () => {
  shallRender(AdjacentPostLinkPrevious, defaultOptionsFactory())
})
