import Main from './Main.vue'
import { shallHaveSlot, shallRender } from '@/utils/commonTestSpecs'

describe('Wrappers / Main', () => {
  shallRender(Main)
  shallHaveSlot(Main, 'default')
})
