import Vue from 'vue'
import type { VueConstructor } from 'vue'
import { DTOMetaPostPoem } from '@/utils/dto.meta.post.poem'
import { formatterDateMeta } from '@/utils/formatter.date.meta'
import mixinCommonIntersectionObserverShownOnce from '@/utils/mixin.common.intersectionObserver.shownOnce'

export default (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinCommonIntersectionObserverShownOnce>
>).extend({
  name: 'ComponentsCardPoem',
  components: {
    ComponentsCover: () => import(/* webpackChunkName: "components" */'@/components/components/Cover/Cover.vue'),
    ComponentsTextMeta: () => import(/* webpackChunkName: "components" */'@/components/components/TextMeta/TextMeta.vue'),
    ComponentsTitle: () => import(/* webpackChunkName: "components" */'@/components/components/Title/Title.vue')
  },
  mixins: [mixinCommonIntersectionObserverShownOnce],
  props: {
    metaPostPoem: {
      type: DTOMetaPostPoem,
      required: true
    }
  },
  computed: {
    'common/intersectionObserver/cacheKey' (): string {
      return this.metaPostPoem.imageCover
    },
    path (): string {
      return this.metaPostPoem.path
    },
    imagesCover (): string[] {
      return this['common/intersectionObserver/shownOnce']
        ? [this.metaPostPoem.imageCover]
        : []
    },
    title (): string {
      return this.metaPostPoem.title
    },
    datePublished (): string {
      return formatterDateMeta(this.metaPostPoem.createdAt)
    },
    datePublishedLabel (): string {
      return `Opublikowano ${this.datePublished}`
    }
  }
})
