import { mount } from '@vue/test-utils'
import TextHeader from './TextHeader.vue'
import { shallRender, shallHaveStringProp, shallHavePropInfluenceOverClassNames } from '@/utils/commonTestSpecs'

describe('Components/Logo', () => {
  const defaultOptions = {
    propsData: {
      title: 'Default Prop Title'
    }
  }

  shallRender(TextHeader, 'components-text-header', defaultOptions)

  describe('Props', () => {
    shallHaveStringProp(TextHeader, 'title', defaultOptions)

    test("shall have number prop 'type' influence over wrapper tag", () => {
      const type = 3
      const wrapper = mount(TextHeader, {
        propsData: {
          ...defaultOptions.propsData,
          type
        }
      })
      expect(wrapper.element.tagName.toLowerCase()).toBe('h3')
    })

    shallHavePropInfluenceOverClassNames(TextHeader, 'type', 4, 'type-4', defaultOptions)
    shallHavePropInfluenceOverClassNames(TextHeader, 'shallShowUnderscore', true, 'underscore', defaultOptions)
  })
})
