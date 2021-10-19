import { mount } from '@vue/test-utils'
import Navigation from './Navigation.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('Wrappers / Navigation', () => {
  shallRender(Navigation)

  describe('children', () => {
    let wrapper: ReturnType<typeof mount>
    beforeAll(() => {
      wrapper = mount(Navigation, {
        slots: {
          default: '<span>Tag child</span>Text child'
        }
      })
    })

    test('shall filter text child', () => {
      expect(wrapper.html()).not.toContain('Text child')
    })

    test('shall wrap child with <li>', () => {
      expect(wrapper.findAll('li')).toHaveLength(1)
    })
  })
})
