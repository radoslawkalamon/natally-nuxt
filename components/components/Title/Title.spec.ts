import Title from '@/components/components/Title/Title.vue'
import { createDefaultOptionsFactory } from '@/devtools/jest.common.spec.utils'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

const defaultOptionsFactory = createDefaultOptionsFactory({
  propsData: {
    title: 'Default title'
  }
})

describe('Components / Title', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: Title,
      description: 'defaults',
      options: defaultOptionsFactory()
    })

    shallPassUnitSanityTest({
      component: Title,
      description: 'with optional props passed',
      options: defaultOptionsFactory({
        propsData: {
          type: 3,
          design: 4,
          shallShowUnderscore: false
        }
      })
    })

    shallPassUnitSanityTest({
      component: Title,
      description: 'type have no influence over design',
      options: defaultOptionsFactory({
        propsData: {
          type: 4
        }
      })
    })
  })
})
