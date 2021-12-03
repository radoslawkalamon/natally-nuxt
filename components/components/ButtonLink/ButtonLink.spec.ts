import ButtonLink from '@/components/components/ButtonLink/ButtonLink.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Components / Button Link', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: ButtonLink,
      options: {
        propsData: {
          label: 'Item label'
        }
      }
    })
  })
})
