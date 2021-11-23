import PageMeta404 from './PageMeta404.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Blocks / Page Meta 404', () => {
  shallRender(PageMeta404, {
    stubs: [
      'ComponentsButtonLink',
      'ComponentsTitle',
      'NuxtLink',
      'WrappersText',
      'WrappersSection'
    ]
  })
})
