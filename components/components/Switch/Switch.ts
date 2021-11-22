import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsSwitch',
  components: {
    WrappersText: () => import(/* webpackChunkName: "wrappers-text" */'@/components/wrappers/Text/Text.vue')
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
})
