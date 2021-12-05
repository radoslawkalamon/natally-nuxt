import Vue from 'vue'

export default Vue.extend({
  name: 'WrappersNavigation',
  components: {
    VNode: {
      functional: true,
      render: (_h: Vue.CreateElement, ctx: Vue.RenderContext) => ctx.props.node
    }
  },
  computed: {
    children () {
      return (this.$slots.default || [])
        .filter(child => !child.text)
    }
  }
})
