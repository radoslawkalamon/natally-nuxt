import Vue from 'vue'
import { DTOMetaPostPoem, DTOMetaPostPoemConstructor } from '~/utils/dto.meta.post.poem'

export default Vue.extend({
  name: 'BlocksAdjacentPostLinksPoem',
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
  data (): Record<string, DTOMetaPostPoem | null> {
    return {
      previousPoem: null,
      nextPoem: null
    }
  },
  async fetch () {
    const articles = await this.$content('poezja-314')
      .sortBy('createdAt', 'asc')
      .surround(this.slug)
      .fetch<DTOMetaPostPoemConstructor>()

    if (Array.isArray(articles)) {
      this.previousPoem = articles[0] ? new DTOMetaPostPoem(articles[0]) : null
      this.nextPoem = articles[1] ? new DTOMetaPostPoem(articles[1]) : null
    }
  }
})
