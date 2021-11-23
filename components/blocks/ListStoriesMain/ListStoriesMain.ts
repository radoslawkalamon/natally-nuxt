import Vue from 'vue'

export default Vue.extend({
  name: 'BlocksListStoriesMain',
  components: {
    ComponentsCardStory: () => import(/* webpackChunkName: "components" */'@/components/components/CardStory/CardStory.vue'),
    ComponentsTitle: () => import(/* webpackChunkName: "components" */'@/components/components/Title/Title.vue'),
    WrappersListStories: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/ListStories/ListStories.vue'),
    WrappersSection: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/Section/Section.vue')
  }
})
