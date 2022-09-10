import LoaderPoems from '@/components/components/LoaderPoems/LoaderPoems.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Components / Loader Poems', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({ component: LoaderPoems })
  })
})
