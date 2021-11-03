import Main from './Main.vue'
import { shallHaveSlot, shallRender } from '@/devtools/jest.shared.spec'

describe('Wrappers / Main', () => {
  shallRender(Main)
  shallHaveSlot(Main, 'default')
})
