import TextStories from '@/components/wrappers/TextStories/TextStories.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Wrappers / Text Stories', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: TextStories,
      options: {
        slots: {
          default: 'Slot default text'
        }
      }
    })
  })
})
