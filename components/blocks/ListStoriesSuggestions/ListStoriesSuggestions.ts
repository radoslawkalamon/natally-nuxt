import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksListStoriesSuggestions',
  components: {
    ComponentsButtonLink: () => import(/* webpackChunkName: "components" */'@/components/components/ButtonLink/ButtonLink.vue'),
    ComponentsCardStory: () => import(/* webpackChunkName: "components" */'@/components/components/CardStory/CardStory.vue'),
    ComponentsTitle: () => import(/* webpackChunkName: "components" */'@/components/components/Title/Title.vue'),
    WrappersListStories: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/ListStories/ListStories.vue'),
    WrappersSection: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/Section/Section.vue')
  },
  props: {
    without: {
      type: Array as Vue.PropType<string[]>,
      default: () => []
    }
  }
})
