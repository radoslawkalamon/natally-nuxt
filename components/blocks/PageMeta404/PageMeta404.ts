import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksPageMeta404',
  components: {
    ComponentsButtonLink: () => import(/* webpackChunkName: "components-button-link" */'@/components/components/ButtonLink/ButtonLink.vue'),
    ComponentsTitle: () => import(/* webpackChunkName: "components-title" */'@/components/components/Title/Title.vue'),
    WrappersText: () => import(/* webpackChunkName: "wrappers-text" */'@/components/wrappers/Text/Text.vue'),
    WrappersSection: () => import(/* webpackChunkName: "wrappers-section" */'@/components/wrappers/Section/Section.vue')
  }
})
