import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksListStoriesSuggestions',
  components: {
    ComponentsButtonLink: () => import(/* webpackChunkName: "components-button-link" */'@/components/components/ButtonLink/ButtonLink.vue'),
    ComponentsCardStory: () => import(/* webpackChunkName: "components-card-story" */'@/components/components/CardStory/CardStory.vue'),
    ComponentsTitle: () => import(/* webpackChunkName: "components-title" */'@/components/components/Title/Title.vue'),
    WrappersListStories: () => import(/* webpackChunkName: "wrappers-list-stories" */'@/components/wrappers/ListStories/ListStories.vue'),
    WrappersSection: () => import(/* webpackChunkName: "wrappers-section" */'@/components/wrappers/Section/Section.vue')
  },
  props: {
    without: {
      type: Array as Vue.PropType<string[]>,
      default: () => []
    }
  }
})
