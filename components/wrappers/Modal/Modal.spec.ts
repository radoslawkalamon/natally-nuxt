import Modal from './Modal.vue'
import { shallRender, shallHaveSlot } from '@/utils/commonTestSpecs'

describe('Wrappers / Modal', () => {
  const defaultOptions = {
    propsData: {
      title: 'Test title'
    },
    stubs: {
      ComponentsTitle: {
        template: '<h1 data-stub="components-title" />'
      }
    }
  }

  shallRender(Modal, defaultOptions)
  shallHaveSlot(Modal, 'default', defaultOptions)
})