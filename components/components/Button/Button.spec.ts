import Button from '@/components/components/Button/Button.vue'
import { expectWrapperEmitOn, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory, createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'

const defaultOptionsFactory = createDefaultOptionsFactory({
  propsData: {
    label: 'Item label'
  }
})

describe('Components / Button Link', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: Button,
      options: defaultOptionsFactory()
    })

    test('shall emit "click" on @click', async () => {
      const wrapper = await createUnitTestWrapper({
        component: Button,
        options: defaultOptionsFactory()
      })
      expectWrapperEmitOn({
        emit: 'click',
        trigger: 'click',
        wrapper
      })
    })
  })
})
