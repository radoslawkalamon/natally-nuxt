import ButtonHamburger from '@/components/components/ButtonHamburger/ButtonHamburger.vue'
import { expectWrapperEmit, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory, createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'

const defaultOptionsFactory = createDefaultOptionsFactory({
  propsData: {
    isOpen: false
  }
})

describe('Components / Button Hamburger', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: ButtonHamburger,
      description: 'drawer closed',
      options: defaultOptionsFactory()
    })

    shallPassUnitSanityTest({
      component: ButtonHamburger,
      description: 'drawer opened',
      options: defaultOptionsFactory({
        propsData: {
          isOpen: true
        }
      })
    })

    test('shall emit "toggle" on @click', async () => {
      const wrapper = await createUnitTestWrapper({
        component: ButtonHamburger,
        options: defaultOptionsFactory()
      })
      wrapper.trigger('click')
      expectWrapperEmit({
        emit: 'toggle',
        wrapper
      })
      wrapper.destroy()
    })
  })
})
