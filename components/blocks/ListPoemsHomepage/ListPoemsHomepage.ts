import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksListPoemsHomepage',
  components: {
    ComponentsButtonLink: () => import(/* webpackChunkName: "components-button-link" */'@/components/components/ButtonLink/ButtonLink.vue'),
    ComponentsCardPoem: () => import(/* webpackChunkName: "components-card-poem" */'@/components/components/CardPoem/CardPoem.vue'),
    ComponentsTitle: () => import(/* webpackChunkName: "components-title" */'@/components/components/Title/Title.vue'),
    WrappersListPoems: () => import(/* webpackChunkName: "wrappers-list-poems" */'@/components/wrappers/ListPoems/ListPoems.vue'),
    WrappersSection: () => import(/* webpackChunkName: "wrappers-section" */'@/components/wrappers/Section/Section.vue')
  }
})
