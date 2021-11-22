import Vue from 'vue'

export default Vue.extend({
  name: 'WrappersNavigation',
  functional: true,
  render (h, { children, data }) {
    const wrapperProps = {
      attrs: {
        ...data.attrs
      },
      class: [
        data.staticClass,
        {
          navigation: true
        }
      ]
    }
    const itemProps = {
      class: 'navigation__item'
    }

    return h(
      'ul',
      wrapperProps,
      (children || [])
        .filter(child => !child.text)
        .map(child => h('li', itemProps, [child]))
    )
  }
})
