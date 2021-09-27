import TextStories from './TextStories.vue'
import { shallHaveSlot, shallRender } from '@/utils/commonTestSpecs'

describe('Wrappers/Text Stories', () => {
  shallRender(TextStories, 'wrappers-text-stories')
  shallHaveSlot(TextStories, 'default')
})
