import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksListStoriesMain',
  components: {
    ComponentsCardStory: () => import(/* webpackChunkName: "components-card-story" */'@/components/components/CardStory/CardStory.vue'),
    ComponentsTitle: () => import(/* webpackChunkName: "components-title" */'@/components/components/Title/Title.vue'),
    WrappersListStories: () => import(/* webpackChunkName: "wrappers-list-stories" */'@/components/wrappers/ListStories/ListStories.vue'),
    WrappersSection: () => import(/* webpackChunkName: "wrappers-section" */'@/components/wrappers/Section/Section.vue')
  }
})
