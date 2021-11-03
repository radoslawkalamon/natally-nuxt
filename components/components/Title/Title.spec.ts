import { mount } from '@vue/test-utils'
import Title from './Title.vue'
import { shallRender, shallHaveStringProp, shallHavePropInfluenceOverClassNames } from '@/devtools/jest.shared.spec'

describe('Components/Logo', () => {
  const defaultOptions = {
    propsData: {
      title: 'Default Prop Title'
    }
  }

  shallRender(Title, defaultOptions)

  describe('Props', () => {
    shallHaveStringProp(Title, 'title', defaultOptions)

    test("shall have number prop 'type' influence over wrapper tag", () => {
      const type = 3
      const wrapper = mount(Title, {
        propsData: {
          ...defaultOptions.propsData,
          type
        }
      })
      expect(wrapper.element.tagName.toLowerCase()).toBe('h3')
    })

    test("shall have number prop 'type' no influence over wrapper classes", () => {
      const type = 3
      const wrapper = mount(Title, {
        propsData: {
          ...defaultOptions.propsData,
          type
        }
      })
      const isWrapperHaveClass = wrapper.classes().some(cls => cls.includes('design-3'))
      expect(isWrapperHaveClass).toBeFalsy()
    })

    shallHavePropInfluenceOverClassNames(Title, 'design', 4, 'design-4', defaultOptions)
    shallHavePropInfluenceOverClassNames(Title, 'shallShowUnderscore', true, 'underscore', defaultOptions)
  })
})
