import Button from '@/components/components/Button/Button.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory } from '@/devtools/jest.common.spec.utils'

const defaultOptionsFactory = createDefaultOptionsFactory({
  propsData: {
    label: 'Item label'
  }
})

describe('Components / Button', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: Button,
      description: 'General',
      options: defaultOptionsFactory()
    })

    shallPassUnitSanityTest({
      component: Button,
      description: 'Text Button',
      options: defaultOptionsFactory({
        propsData: {
          type: 'text'
        }
      })
    })
  })
})
