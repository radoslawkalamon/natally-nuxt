import Vue from 'vue'

export default Vue.extend({
  name: 'WrappersNavigation',
  components: {
    VNode: {
      functional: true,
      // @ts-ignore: This is hacky as hell but it works :D
      render: (_h, { props }) => props.node
    }
  },
  computed: {
    children () {
      return (this.$slots.default || [])
        .filter(child => !child.text)
    }
  }
})
