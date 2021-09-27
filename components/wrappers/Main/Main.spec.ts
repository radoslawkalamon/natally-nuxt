import Main from './Main.vue'
import { shallHaveSlot, shallRender } from '@/utils/commonTestSpecs'

describe('Wrappers/Text Stories', () => {
  shallRender(Main, 'wrappers-main')
  shallHaveSlot(Main, 'default')
})
