import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsTextPoems',
  components: {
    WrappersText: () => import(/* webpackChunkName: "wrappers-text" */'@/components/wrappers/Text/Text.vue')
  }
})
