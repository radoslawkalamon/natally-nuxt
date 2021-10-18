import Vue from 'vue'
import StoryPostExcerpt from '@/utils/DTO/StoryPostExcerpt'

export default Vue.extend({
  name: 'ComponentsCardStory',
  props: {
    storyPostExcerpt: {
      type: StoryPostExcerpt,
      required: true
    }
  },
  computed: {
    coverImage (): string {
      return this.storyPostExcerpt.coverImage
    },
    coverImage2x (): string {
      return this.storyPostExcerpt.coverImage2x
    },
    datePublished (): string {
      return this.storyPostExcerpt.datePublished
    },
    datePublishedLabel (): string {
      return `Opublikowano ${this.datePublished}`
    },
    isAudiobook (): boolean {
      return this.storyPostExcerpt.isAudiobook
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
    readingTime (): string {
      return this.storyPostExcerpt.readingTime
    },
    readingTimeLabel (): string {
      return `Tekst przeczytasz w ${this.readingTime}`
    },
    title (): string {
      return this.storyPostExcerpt.title
    },
    url (): string {
      return this.storyPostExcerpt.url
    }
  }
})
