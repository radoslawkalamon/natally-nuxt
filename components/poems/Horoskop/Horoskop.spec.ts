import Horoskop from './Horoskop.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Poems / Horoskop', () => {
  shallRender(Horoskop)
})
