import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksListPoemsMain',
  components: {
    ComponentsCardPoem: () => import(/* webpackChunkName: "components" */'@/components/components/CardPoem/CardPoem.vue'),
    WrappersListPoems: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/ListPoems/ListPoems.vue')
  }
})
