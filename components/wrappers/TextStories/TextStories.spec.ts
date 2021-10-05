import TextStories from './TextStories.vue'
import { shallHaveSlot, shallRender } from '@/utils/commonTestSpecs'

describe('Wrappers / Text Stories', () => {
  shallRender(TextStories)
  shallHaveSlot(TextStories, 'default')
})
