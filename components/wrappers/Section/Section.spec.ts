import Section from '@/components/wrappers/Section/Section.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory } from '@/devtools/jest.common.spec.utils'

const defaultOptionsFactory = createDefaultOptionsFactory({
  slots: {
    default: 'This is default slot test'
  }
})

describe('Wrappers / Section', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: Section,
      description: 'no footer slot',
      options: defaultOptionsFactory({
        slots: {
          header: 'This is header slot test'
        }
      })
    })

    shallPassUnitSanityTest({
      component: Section,
      description: 'no header slot',
      options: defaultOptionsFactory({
        slots: {
          footer: 'This is footer slot test'
        }
      })
    })
  })
})
