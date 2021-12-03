import LoadingBar from '@/components/blocks/LoadingBar/LoadingBar.vue'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
import { createDefaultOptionsFactory, createUnitTestWrapper } from '@/devtools/jest.common.spec.utils'

jest.useFakeTimers()

const defaultOptionsFactory = createDefaultOptionsFactory({
  stubs: ['ComponentsProgressBar']
})

describe('Blocks / Loading Bar', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: LoadingBar,
      options: defaultOptionsFactory()
    })

    test('shall show progress bar', async () => {
      const wrapper = await createUnitTestWrapper({
        component: LoadingBar,
        options: defaultOptionsFactory()
      })
      // @ts-ignore: No component typing :(
      wrapper.vm.start()
      await wrapper.vm.$nextTick()

      expect(wrapper.html()).toMatchSnapshot()

      wrapper.destroy()
    })

    test('shall increase progress bar width', async () => {
      const wrapper = await createUnitTestWrapper({
        component: LoadingBar,
        options: defaultOptionsFactory({
          data () {
            return {
              shallShow: true
            }
          }
        })
      })
      // @ts-ignore: No component typing :(
      wrapper.vm.increase(40)
      await wrapper.vm.$nextTick()

      expect(wrapper.html()).toMatchSnapshot()

      wrapper.destroy()
    })

    test('shall progress bar width be 100 & hide after timeout', async () => {
      const wrapper = await createUnitTestWrapper({
        component: LoadingBar,
        options: defaultOptionsFactory({
          data () {
            return {
              shallShow: true,
              progress: 40
            }
          }
        })
      })
      // @ts-ignore: No component typing :(
      wrapper.vm.finish()
      await wrapper.vm.$nextTick()
      expect(wrapper.html()).toMatchSnapshot()
      jest.advanceTimersByTime(2000)
      await wrapper.vm.$nextTick()
      expect(wrapper.html()).toMatchSnapshot()

      wrapper.destroy()
    })

    test('shall loading bar be visible after finish() & start()', async () => {
      const wrapper = await createUnitTestWrapper({
        component: LoadingBar,
        options: defaultOptionsFactory({
          data () {
            return {
              shallShow: true,
              progress: 40
            }
          }
        })
      })
      // @ts-ignore: No component typing :(
      wrapper.vm.finish()
      jest.advanceTimersByTime(100)
      await wrapper.vm.$nextTick()
      // @ts-ignore: No component typing :(
      wrapper.vm.start()
      await wrapper.vm.$nextTick()
      expect(wrapper.html()).toMatchSnapshot()

      wrapper.destroy()
    })
  })

  describe('Integration', () => {
    shallPassIntegrationSanityTest({
      component: LoadingBar,
      options: {
        data () {
          return {
            shallShow: true
          }
        }
      }
    })
  })
})
