import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksListPoemsMain',
  components: {
    ComponentsCardPoem: () => import(/* webpackChunkName: "components-card-poem" */'@/components/components/CardPoem/CardPoem.vue'),
    WrappersListPoems: () => import(/* webpackChunkName: "wrappers-list-poems" */'@/components/wrappers/ListPoems/ListPoems.vue')
  }
})
