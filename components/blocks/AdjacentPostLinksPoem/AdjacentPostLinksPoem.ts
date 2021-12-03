import Vue from 'vue'
import { DTOMetaPostPoem, DTOMetaPostPoemConstructor } from '@/utils/dto.meta.post.poem'

export default Vue.extend({
  name: 'BlocksAdjacentPostLinksPoem',
  components: {
    ComponentsAdjacentPostLinkNext: () => import(/* webpackChunkName: "components" */'@/components/components/AdjacentPostLinkNext/AdjacentPostLinkNext.vue'),
    ComponentsAdjacentPostLinkPrevious: () => import(/* webpackChunkName: "components" */'@/components/components/AdjacentPostLinkPrevious/AdjacentPostLinkPrevious.vue')
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data (): Record<string, DTOMetaPostPoemConstructor[]> {
    return {
      articles: []
    }
  },
  async fetch () {
    const articles = await this.$content('poezja-314')
      .sortBy('createdAt', 'asc')
      .surround(this.slug)
      .fetch<DTOMetaPostPoemConstructor>()

    this.articles = articles as DTOMetaPostPoemConstructor[]
  },
  computed: {
    previousPoem (): DTOMetaPostPoem | null {
      return this.articles[0] ? new DTOMetaPostPoem(this.articles[0]) : null
    },
    nextPoem (): DTOMetaPostPoem | null {
      return this.articles[1] ? new DTOMetaPostPoem(this.articles[1]) : null
    }
  }
})
