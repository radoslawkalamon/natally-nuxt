import Vue from 'vue'
import type { MetaInfo } from 'vue-meta'
import { DTOMetaPostPoem } from '@/utils/dto.meta.post.poem'
import { factoryHeadPostPoem } from '@/utils/factory.head.post.poem'
import { formatterDateMeta } from '@/utils/formatter.date.meta'

export default Vue.extend({
  name: 'PagePoezja314Slug',
  async asyncData ({ $content, params, error, route }) {
    const slug = params.slug || route.path.split('/').at(-2) || 'not-found'
    const article = await $content('poezja-314', slug)
      .fetch()

    if (!article) {
      return error({ statusCode: 404, message: 'Article not found' })
    }

    return { article }
  },
  head (): MetaInfo {
    return factoryHeadPostPoem(this.dtoMetaPostPoem)
  },
  computed: {
    articleComponent (): 'NuxtContent' | Vue.Component {
      return 'NuxtContent'
    },
    articleProps (): object {
      return this.articleComponent === 'NuxtContent'
        // @ts-ignore: Remove ts-ignore for Nuxt 2.16.0
        ? { document: this.article }
        : {}
    },
    dtoMetaPostPoem (): DTOMetaPostPoem {
      // @ts-ignore: Remove ts-ignore for Nuxt 2.16.0
      return new DTOMetaPostPoem(this.article)
    },
    poemDatePublished (): string {
      return formatterDateMeta(this.dtoMetaPostPoem.createdAt)
    }
  }
})
