import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksPageMeta404',
  components: {
    ComponentsButtonLink: () => import(/* webpackChunkName: "components" */'@/components/components/ButtonLink/ButtonLink.vue'),
    ComponentsTitle: () => import(/* webpackChunkName: "components" */'@/components/components/Title/Title.vue'),
    WrappersText: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/Text/Text.vue'),
    WrappersSection: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/Section/Section.vue')
  }
})
