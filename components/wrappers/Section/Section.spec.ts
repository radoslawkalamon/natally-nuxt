import Section from './Section.vue'
import { shallHaveSlot, shallHideSlotWhenNoChildren, shallRender } from '@/utils/commonTestSpecs'

describe('Wrappers / Section', () => {
  shallRender(Section)
  shallHaveSlot(Section, 'header')
  shallHideSlotWhenNoChildren(Section, 'header', 'wrappers-section-header')
  shallHaveSlot(Section, 'default')
  shallHaveSlot(Section, 'footer')
  shallHideSlotWhenNoChildren(Section, 'footer', 'wrappers-section-footer')
})
