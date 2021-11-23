import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksAboutMe',
  components: {
    WrappersText: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/Text/Text.vue')
  }
})
