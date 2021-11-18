import merge from 'lodash/merge'
import { shallRender } from '@/devtools/jest.shared.spec'
import PageError from '@/layouts/error.vue'

const defaultOptionsFactory = (options?: object) => merge({
  stubs: [
    'BlocksAnimationPufferfish',
    'ComponentsButtonLink',
    'ComponentsTitle',
    'WrappersText',
    'WrappersSection'
  ]
}, options)

describe('Layouts / Default', () => {
  shallRender(PageError, defaultOptionsFactory())
})
