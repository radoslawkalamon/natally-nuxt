import Vue from 'vue'
import { formatterDateMeta } from '@/utils/formatter.date.meta'

export default Vue.extend({
  name: 'BlocksPageMeta',
  components: {
    ComponentsTextMeta: () => import(/* webpackChunkName: "components-text-meta" */'@/components/components/TextMeta/TextMeta.vue'),
    ComponentsTitle: () => import(/* webpackChunkName: "components-title" */'@/components/components/Title/Title.vue')
  },
  props: {
    createdAt: {
      type: Date,
      default: () => new Date(0)
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    dateMeta (): string {
      return formatterDateMeta(this.createdAt)
    },
    dateMetaLabel (): string {
      return `Opublikowano ${this.dateMeta}`
    },
    shallShowDate (): boolean {
      return this.createdAt.valueOf() !== 0
    }
  }
})
