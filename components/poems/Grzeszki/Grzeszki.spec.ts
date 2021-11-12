import Grzeszki from './Grzeszki.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Poems / Grzeszki', () => {
  shallRender(Grzeszki)
})
