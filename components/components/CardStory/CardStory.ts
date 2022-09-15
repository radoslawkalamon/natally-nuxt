import Vue from 'vue'
import type { VueConstructor } from 'vue'
import { DTOMetaPostStory } from '@/utils/dto.meta.post.story'
import { formatterDateMeta } from '@/utils/formatter.date.meta'
import { formatterTimeReading } from '@/utils/formatter.time.reading'
import mixinCommonIntersectionObserverShownOnce from '@/utils/mixin.common.intersectionObserver.shownOnce'

export default (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinCommonIntersectionObserverShownOnce>
>).extend({
  name: 'ComponentsCardStory',
  components: {
    ComponentsCover: () => import(/* webpackChunkName: "components" */'@/components/components/Cover/Cover.vue'),
    ComponentsTextMeta: () => import(/* webpackChunkName: "components" */'@/components/components/TextMeta/TextMeta.vue'),
    ComponentsTitle: () => import(/* webpackChunkName: "components" */'@/components/components/Title/Title.vue')
  },
  mixins: [mixinCommonIntersectionObserverShownOnce],
  props: {
    metaPostStory: {
      type: DTOMetaPostStory,
      required: true
    }
  },
  computed: {
    'common/intersectionObserver/cacheKey' (): string {
      return [this.metaPostStory.imageCover, this.metaPostStory.imageCover2x].join('.')
    },
    path (): string {
      return this.metaPostStory.path
    },
    imagesCover (): string[] {
      return this['common/intersectionObserver/shownOnce']
        ? [this.metaPostStory.imageCover, this.metaPostStory.imageCover2x]
        : []
    },
    datePublished (): string {
      return formatterDateMeta(this.metaPostStory.createdAt)
    },
    datePublishedLabel (): string {
      return `Opublikowano ${this.datePublished}`
    },
    readingTime (): string {
      return formatterTimeReading(this.metaPostStory.timeReading)
    },
    readingTimeLabel (): string {
      return `Tekst przeczytasz w ${this.readingTime}`
    },
    isAudiobook (): boolean {
      return this.metaPostStory.audiobookId !== '0'
    },
    isAudiobookClasses (): string[] {
      return [
        'card-story__audiobook',
        !this.isAudiobook ? 'card-story__audiobook--disabled' : ''
      ]
    },
    isAudiobookLabel (): string {
      return this.isAudiobook
        ? 'Post posiada wersję dźwiękową'
        : 'Post nie posiada wersji dźwiękowej'
    },
    title (): string {
      return this.metaPostStory.title
    }
  }
})
