import LogoCrustyBread from '@/components/components/LogoCrustyBread/LogoCrustyBread.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Components / Logo Crusty Bread', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({ component: LogoCrustyBread })
  })
})
