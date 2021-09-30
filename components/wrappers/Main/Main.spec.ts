import Main from './Main.vue'
import { shallHaveSlot, shallRender } from '@/utils/commonTestSpecs'

describe('Wrappers / Main', () => {
  shallRender(Main, 'wrappers-main')
  shallHaveSlot(Main, 'default')
})
