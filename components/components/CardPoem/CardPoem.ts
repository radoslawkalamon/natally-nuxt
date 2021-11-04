import Vue from 'vue'
import { DTOMetaPostPoem } from '@/utils/dto.meta.post.poem'
import { formatterDateMeta } from '@/utils/formatter.date.meta'

export default Vue.extend({
  name: 'ComponentsCardPoem',
  props: {
    metaPostPoem: {
      type: DTOMetaPostPoem,
      required: true
    }
  },
  computed: {
    path (): string {
      return this.metaPostPoem.path
    },
    imageCover (): string {
      return this.metaPostPoem.imageCover
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
