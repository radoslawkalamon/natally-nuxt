import { mount } from '@vue/test-utils'
import merge from 'lodash/merge'
import PageMeta from './PageMeta.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

jest.mock('@/utils/formatter.date.meta', () => ({ formatterDateMeta: () => 'Mocked date formatter' }))

const defaultOptionsFactory = (options?: object) => merge({
  propsData: {
    title: 'This is test title'
  },
  stubs: [
    'ComponentsTitle',
    'ComponentsTextMeta'
  ]
}, options)

describe('Blocks / Page Meta', () => {
  shallRender(PageMeta, defaultOptionsFactory())

  test('shall show data-test="blocks-page-meta-footer" if createdAt passed', () => {
    const wrapper = mount(PageMeta, merge(defaultOptionsFactory(), {
      propsData: {
        createdAt: new Date()
      }
    }))
    const footer = wrapper.find('[data-test="blocks-page-meta-footer"]')
    expect(footer.exists()).toBe(true)
  })
})
