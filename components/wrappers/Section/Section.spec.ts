import Section from './Section.vue'
import { shallHaveSlot, shallHideSlotWhenNoChildren, shallRender } from '@/devtools/jest.shared.spec'

describe('Wrappers / Section', () => {
  shallRender(Section)
  shallHaveSlot(Section, 'header')
  shallHideSlotWhenNoChildren(Section, 'header', 'wrappers-section-header')
  shallHaveSlot(Section, 'default')
  shallHaveSlot(Section, 'footer')
  shallHideSlotWhenNoChildren(Section, 'footer', 'wrappers-section-footer')
})
