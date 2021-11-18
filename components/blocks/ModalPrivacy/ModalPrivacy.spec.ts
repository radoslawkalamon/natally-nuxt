import { mount } from '@vue/test-utils'
import ModalPrivacy from './ModalPrivacy.vue'

describe('Blocks / Modal Privacy', () => {
  const defaultOptions = {
    stubs: [
      'WrappersModal',
      'ComponentsSwitch',
      'ComponentsButton'
    ]
  }

  test('shall not render', () => {
    const wrapper = mount(ModalPrivacy, defaultOptions)
    const isWrapperVisible = wrapper.isVisible()
    expect(isWrapperVisible).toBeFalsy()
  })

  test('shall render', async () => {
    const wrapper = mount(ModalPrivacy, defaultOptions)
    await wrapper.vm.$root.$emit('privacy/modal/toggle')
    const isWrapperVisible = wrapper.isVisible()
    expect(isWrapperVisible).toBeTruthy()
  })
})
