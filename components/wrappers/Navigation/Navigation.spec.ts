import { shallowMount } from '@vue/test-utils'
import Navigation from '@/components/wrappers/Navigation/Navigation.vue'
import { createDefaultOptionsFactory } from '@/devtools/jest.common.spec.utils'

const defaultOptionsFactory = createDefaultOptionsFactory({
  slots: {
    default: [
      { template: '<span>Tag child 1</span>' },
      'Text child',
      { template: '<span>Tag child 2</span>' }
    ]
  }
})

describe('Wrappers / Navigation', () => {
  test('shall pass unit sanity test', () => {
    const wrapper = shallowMount(Navigation, defaultOptionsFactory())
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.destroy()
  })
})
