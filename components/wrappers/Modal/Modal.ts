import Vue from 'vue'

export default Vue.extend({
  name: 'WrappersModal',
  components: {
    ComponentsTitle: () => import(/* webpackChunkName: "components" */'@/components/components/Title/Title.vue')
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
