import Checklista from './Checklista.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Poems / Checklista', () => {
  const defaultOptions = {
    stubs: {
      ComponentsCheckbox: {
        template: '<input data-stub="components-checkbox" type="checkbox" />'
      }
    }
  }

  shallRender(Checklista, defaultOptions)
})
