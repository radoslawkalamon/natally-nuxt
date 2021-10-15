import Vue from 'vue'
import PoemPostExcerpt from '@/utils/DTO/PoemPostExcerpt'

export default Vue.extend({
  name: 'ComponentsCardPoem',
  props: {
    poemPostExcerpt: {
      type: PoemPostExcerpt,
      required: true
    }
  },
  computed: {
    coverImage (): string {
      return this.poemPostExcerpt.coverImage
    },
    datePublished (): string {
      return this.poemPostExcerpt.datePublished
    },
    title (): string {
      return this.poemPostExcerpt.title
    },
    url (): string {
      return this.poemPostExcerpt.url
    }
  }
})
