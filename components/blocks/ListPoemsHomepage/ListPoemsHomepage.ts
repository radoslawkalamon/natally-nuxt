import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksListPoemsHomepage',
  components: {
    ComponentsButtonLink: () => import(/* webpackChunkName: "components" */'@/components/components/ButtonLink/ButtonLink.vue'),
    ComponentsCardPoem: () => import(/* webpackChunkName: "components" */'@/components/components/CardPoem/CardPoem.vue'),
    ComponentsTitle: () => import(/* webpackChunkName: "components" */'@/components/components/Title/Title.vue'),
    WrappersListPoems: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/ListPoems/ListPoems.vue'),
    WrappersSection: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/Section/Section.vue')
  }
})
