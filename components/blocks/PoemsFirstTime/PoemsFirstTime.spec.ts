import PoemsFirstTime from './PoemsFirstTime.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('Blocks / Poems First Time', () => {
  const defaultOptions = {
    stubs: {
      WrappersSection: {
        template: '<section data-stub="wrappers-section"><slot /></section>'
      },
      ComponentsTitle: {
        template: '<h1 data-stub="components-title" />'
      },
      WrappersText: {
        template: '<div data-stub="wrappers-text"><slot /></div>'
      },
      ComponentsButtonLink: {
        template: '<a href="#" data-stub="components-button-link" />'
      }
    }
  }

  shallRender(PoemsFirstTime, defaultOptions)
})
