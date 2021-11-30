import Button from '@/components/components/Button/Button.vue'
import { expectWrapperEmit, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory, createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'

const defaultOptionsFactory = createDefaultOptionsFactory({
  propsData: {
    label: 'Item label'
  }
})

describe('Components / Button', () => {
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
      wrapper.trigger('click')
      expectWrapperEmit({
        emit: 'click',
        wrapper
      })
      wrapper.destroy()
    })
  })
})
