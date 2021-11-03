import ListAudiobookServices from './ListAudiobookServices.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Blocks / List Audiobook Services', () => {
  const defaultOptions = {
    stubs: {
      ComponentsCardAudiobookService: {
        template: '<a data-stub="components-card-audiobook-service" href="#"><slot /></a>'
      }
    }
  }

  shallRender(ListAudiobookServices, defaultOptions)
})
