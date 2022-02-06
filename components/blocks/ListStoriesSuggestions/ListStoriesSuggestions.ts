import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksListStoriesSuggestions',
  components: {
    ComponentsCardStory: () => import(/* webpackChunkName: "components" */'@/components/components/CardStory/CardStory.vue'),
    ComponentsLink: () => import(/* webpackChunkName: "components" */'@/components/components/Link/Link.vue'),
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
