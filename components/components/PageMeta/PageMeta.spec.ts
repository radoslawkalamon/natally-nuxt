import { mount } from '@vue/test-utils'
import { merge } from 'lodash'
import PageMeta from './PageMeta.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('Components / Page Meta', () => {
  const defaultOptions = {
    propsData: {
      title: 'This is test title',
      datePublished: '99.99.9999'
    },
    stubs: {
      ComponentsTitle: {
        template: '<h1 data-stub="components-title" />'
      },
      ComponentsTextMeta: {
        template: '<p data-stub="components-text-meta" />'
      }
    }
  }

  shallRender(PageMeta, defaultOptions)

  test('shall hide data-test="components-page-meta-footer" if empty datePublished passed', () => {
    const wrapper = mount(PageMeta, merge(defaultOptions, {
      propsData: {
        datePublished: ''
      }
    }))
    const footer = wrapper.find('[data-test="components-page-meta-footer"]')
    expect(footer.exists()).toBeFalsy()
  })
})
