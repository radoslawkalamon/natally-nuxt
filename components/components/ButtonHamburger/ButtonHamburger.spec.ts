import ButtonHamburger from '@/components/components/ButtonHamburger/ButtonHamburger.vue'
import { expectWrapperEmitOn, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
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
      options: defaultOptionsFactory()
    })

    shallPassUnitSanityTest({
      component: ButtonHamburger,
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

      expectWrapperEmitOn({
        emit: 'toggle',
        trigger: 'click',
        wrapper
      })
    })
  })
})
