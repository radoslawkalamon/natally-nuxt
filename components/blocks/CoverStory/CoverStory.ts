import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksCoverStory',
  components: {
    ComponentsCover: () => import(/* webpackChunkName: "components" */'@/components/components/Cover/Cover.vue')
  },
  props: {
    images: {
      type: Array as Vue.PropType<String[]>,
      required: true
    }
  }
})
