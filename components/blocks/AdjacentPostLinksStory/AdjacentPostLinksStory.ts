import Vue from 'vue'
import { DTOMetaPostStory, DTOMetaPostStoryConstructor } from '@/utils/dto.meta.post.story'

export default Vue.extend({
  name: 'BlocksAdjacentPostLinksStory',
  components: {
    ComponentsAdjacentPostLinkNext: () => import(/* webpackChunkName: "components-adjacent-post-link-next" */'@/components/components/AdjacentPostLinkNext/AdjacentPostLinkNext.vue'),
    ComponentsAdjacentPostLinkPrevious: () => import(/* webpackChunkName: "components-adjacent-post-link-previous" */'@/components/components/AdjacentPostLinkPrevious/AdjacentPostLinkPrevious.vue'),
    ComponentsAdjacentPostLinkPlaceholder: () => import(/* webpackChunkName: "components-adjacent-post-link-placeholder" */'@/components/components/AdjacentPostLinkPlaceholder/AdjacentPostLinkPlaceholder.vue')
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data (): Record<string, DTOMetaPostStory | null> {
    return {
      previousStory: null,
      nextStory: null
    }
  },
  async fetch () {
    const articles = await this.$content('opowiadania')
      .sortBy('createdAt', 'asc')
      .surround(this.slug)
      .fetch<DTOMetaPostStoryConstructor>()

    if (Array.isArray(articles)) {
      this.previousStory = articles[0] ? new DTOMetaPostStory(articles[0]) : null
      this.nextStory = articles[1] ? new DTOMetaPostStory(articles[1]) : null
    }
  }
})
