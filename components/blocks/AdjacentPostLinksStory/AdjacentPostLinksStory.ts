import Vue from 'vue'
import { DTOMetaPostStory, DTOMetaPostStoryConstructor } from '@/utils/dto.meta.post.story'

export default Vue.extend({
  name: 'BlocksAdjacentPostLinksStory',
  components: {
    ComponentsAdjacentPostLink: () => import(/* webpackChunkName: "components" */'@/components/components/AdjacentPostLink/AdjacentPostLink.vue')
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data (): Record<string, DTOMetaPostStoryConstructor[]> {
    return {
      articles: []
    }
  },
  async fetch () {
    const articles = await this.$content('opowiadania')
      .sortBy('createdAt', 'asc')
      .surround(this.slug)
      .fetch<DTOMetaPostStoryConstructor>()

    this.articles = articles as DTOMetaPostStoryConstructor[]
  },
  computed: {
    previousStory (): DTOMetaPostStory | null {
      return this.articles[0] ? new DTOMetaPostStory(this.articles[0]) : null
    },
    nextStory (): DTOMetaPostStory | null {
      return this.articles[1] ? new DTOMetaPostStory(this.articles[1]) : null
    }
  }
})
