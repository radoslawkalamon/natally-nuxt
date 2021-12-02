import PageMeta from '@/components/blocks/PageMeta/PageMeta.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory } from '@/devtools/jest.common.spec.utils'

jest.mock('@/utils/formatter.date.meta', () => ({ formatterDateMeta: () => 'Mocked date formatter' }))

const defaultOptionsFactory = createDefaultOptionsFactory({
  propsData: {
    title: 'This is test title'
  },
  stubs: [
    'ComponentsTitle',
    'ComponentsTextMeta'
  ]
})

describe('Blocks / Page Meta', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: PageMeta,
      description: 'no date',
      options: defaultOptionsFactory()
    })

    shallPassUnitSanityTest({
      component: PageMeta,
      description: 'with date',
      options: defaultOptionsFactory({
        propsData: {
          createdAt: new Date(1638464501972)
        }
      })
    })
  })
})
