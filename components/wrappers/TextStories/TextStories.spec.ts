import TextStories from './TextStories.vue'
import { shallHaveSlot, shallRender } from '@/devtools/jest.shared.spec'

describe('Wrappers / Text Stories', () => {
  shallRender(TextStories)
  shallHaveSlot(TextStories, 'default')
})
