import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsTextPoems',
  components: {
    WrappersText: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/Text/Text.vue')
  }
})
