import Logo from './Logo.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Components / Logo', () => {
  shallRender(Logo)
})
