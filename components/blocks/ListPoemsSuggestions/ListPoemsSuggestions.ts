import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksListPoemsSuggestions',
  components: {
    ComponentsCardPoem: () => import(/* webpackChunkName: "components" */'@/components/components/CardPoem/CardPoem.vue'),
    ComponentsLink: () => import(/* webpackChunkName: "components" */'@/components/components/Link/Link.vue'),
    ComponentsTitle: () => import(/* webpackChunkName: "components" */'@/components/components/Title/Title.vue'),
    WrappersListPoems: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/ListPoems/ListPoems.vue'),
    WrappersSection: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/Section/Section.vue')
  },
  props: {
    without: {
      type: Array as Vue.PropType<string[]>,
      default: () => []
    }
  }
})
