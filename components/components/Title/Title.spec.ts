import { mount } from '@vue/test-utils'
import Title from './Title.vue'
import { shallRender, shallHaveStringProp, shallHavePropInfluenceOverClassNames } from '@/utils/commonTestSpecs'

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

    shallHavePropInfluenceOverClassNames(Title, 'type', 4, 'type-4', defaultOptions)
    shallHavePropInfluenceOverClassNames(Title, 'shallShowUnderscore', true, 'underscore', defaultOptions)
  })
})
