import PageMeta from '@/components/blocks/PageMeta/PageMeta.vue'
import { shallPassIntegrationSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory } from '@/devtools/jest.common.spec.utils'

const defaultOptionsFactory = createDefaultOptionsFactory({
  propsData: {
    title: 'This is test title'
  }
})

describe('Blocks / Page Meta', () => {
  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: PageMeta,
      description: 'no date',
      options: defaultOptionsFactory()
    })

    shallPassIntegrationSanityTest({
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
