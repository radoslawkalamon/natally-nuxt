import flushPromises from 'flush-promises'
import ModalPrivacy from '@/components/blocks/ModalPrivacy/ModalPrivacy.vue'
import { createIntegrationTestWrapper } from '@/devtools/jest.common.spec.utils'

describe('Blocks / Modal Privacy', () => {
  describe('Integration', () => {
    beforeEach(() => {
      jest.restoreAllMocks()
    })

    test('shall open & hide on "privacy/modal/toggle"', async () => {
      const wrapper = await createIntegrationTestWrapper({
        component: ModalPrivacy
      })
      expect(wrapper.html()).toMatchSnapshot()

      wrapper.vm.$root.$emit('privacy/modal/toggle')
      await wrapper.vm.$nextTick()
      await flushPromises()
      expect(wrapper.html()).toMatchSnapshot()

      wrapper.destroy()
    })

    test('shall change of [data-test="blocks-modal-privacy-soundcloud"] call Storage', async () => {
      const spy = jest.spyOn(Storage.prototype, 'setItem')
      const wrapper = await createIntegrationTestWrapper({
        component: ModalPrivacy,
        options: {
          data () {
            return {
              shallShowPrivacyModal: true
            }
          }
        }
      })

      wrapper.get('[data-test="blocks-modal-privacy-soundcloud"]').setChecked(true)
      expect(spy).toBeCalledWith('privacy-settings-soundcloud', '1')

      wrapper.get('[data-test="blocks-modal-privacy-soundcloud"]').setChecked(false)
      expect(spy).toBeCalledWith('privacy-settings-soundcloud', '0')

      wrapper.destroy()
    })

    test('shall click on [data-test="blocks-modal-privacy-apply-settings"] call window.location.reload', async () => {
      const location: Location = window.location
      // @ts-ignore
      delete window.location
      window.location = {
        ...location,
        reload: jest.fn()
      }

      const wrapper = await createIntegrationTestWrapper({
        component: ModalPrivacy,
        options: {
          data () {
            return {
              shallShowPrivacyModal: true
            }
          }
        }
      })
      wrapper.get('[data-test="blocks-modal-privacy-apply-settings"]').trigger('click')

      expect(window.location.reload).toBeCalled()

      jest.restoreAllMocks()
      window.location = location
      wrapper.destroy()
    })
  })
})
