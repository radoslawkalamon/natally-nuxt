import flushPromises from 'flush-promises'
import { mount } from '@vue/test-utils'
import merge from 'lodash/merge'
import Audiobook from './Audiobook.vue'

const defaultOptionsFactory = (options?: object) => merge({
  propsData: {
    id: '1234567890'
  },
  stubs: [
    'ClientOnly'
  ]
}, options)

describe('Blocks / Audiobook', () => {
  test('shall render prompt', async (): Promise<void> => {
    Storage.prototype.getItem = jest.fn(() => '0')
    const wrapper = mount(Audiobook, defaultOptionsFactory())
    await flushPromises()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('shall render iframe', async (): Promise<void> => {
    process.client = true
    Storage.prototype.getItem = jest.fn(() => '1')
    const wrapper = mount(Audiobook, defaultOptionsFactory())
    await flushPromises()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
