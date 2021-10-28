import Default from './default.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('Layouts / Default', () => {
  const defaultOptions = {
    stubs: {
      BlocksHeader: {
        template: '<header data-stub="blocks-header" />'
      },
      WrappersMain: {
        template: '<div data-stub="wrappers-main"><slot /></div>'
      },
      Nuxt: {
        template: '<div data-stub="nuxt" />'
      },
      BlocksFooter: {
        template: '<footer data-stub="blocks-footer" />'
      }
    }
  }

  shallRender(Default, defaultOptions)
})
