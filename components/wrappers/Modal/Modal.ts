import Vue from 'vue'

export default Vue.extend({
  name: 'WrappersModal',
  components: {
    ComponentsTitle: () => import(/* webpackChunkName: "components-title" */'@/components/components/Title/Title.vue')
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
