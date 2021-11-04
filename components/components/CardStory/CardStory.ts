import Vue from 'vue'
import { DTOMetaPostStory } from '@/utils/dto.meta.post.story'
import { formatterDateMeta } from '@/utils/formatter.date.meta'
import { formatterTimeReading } from '@/utils/formatter.time.reading'

export default Vue.extend({
  name: 'ComponentsCardStory',
  props: {
    metaPostStory: {
      type: DTOMetaPostStory,
      required: true
    }
  },
  computed: {
    path (): string {
      return this.metaPostStory.path
    },
    imageCover (): string {
      return this.metaPostStory.imageCover
    },
    imageCover2x (): string {
      return this.metaPostStory.imageCover2x
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
