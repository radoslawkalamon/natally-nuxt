import CrustyBreadLogo from './CrustyBreadLogo.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('Components/Logo', () => {
  shallRender(CrustyBreadLogo, 'components-crusty-bread-logo')
})
