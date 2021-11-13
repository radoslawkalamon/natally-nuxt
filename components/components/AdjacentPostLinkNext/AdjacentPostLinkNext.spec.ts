import { merge } from 'lodash'
import AdjacentPostLinkNext from './AdjacentPostLinkNext.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

const defaultOptionsFactory = (options?: object) => merge({
  propsData: {
    label: 'Następny',
    path: '/post/test-path/',
    title: 'Post testowy'
  },
  stubs: [
    'NuxtLink'
  ]
}, options)

describe('Components / Adjacent Post Link Next', () => {
  shallRender(AdjacentPostLinkNext, defaultOptionsFactory())
})
