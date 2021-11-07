import Vue from 'vue'
import { DTOMetaPostPoemConstructor, DTOMetaPostPoem } from '@/utils/dto.meta.post.poem'

export default Vue.extend({
  name: 'WrappersListPoems',
  props: {
    limit: {
      type: Number,
      default: 0
    },
    randomize: {
      type: Boolean,
      default: false
    }
  },
  data (): Record<string, DTOMetaPostPoemConstructor[]> {
    return {
      poems: []
    }
  },
  async fetch (): Promise<void> {
    this.poems = this.randomize
      ? await this.fetchMetaPostPoemsRandom()
      : await this.fetchMetaPostPoems()
  },
  computed: {
    fetchContentDirectory (): string {
      return '/poezja-314'
    },
    metaPostPoemsConstructorKeys (): string[] {
      return ['createdAt', 'description', 'imageCover', 'imageOpenGraph', 'path', 'title', 'updatedAt']
    },
    metaPostPoems (): DTOMetaPostPoem[] {
      return this.poems.map((i: DTOMetaPostPoemConstructor) => new DTOMetaPostPoem(i))
    }
  },
  methods: {
    async fetchMetaPostPoems (): Promise<DTOMetaPostPoemConstructor[]> {
      const poems = await this.$content(this.fetchContentDirectory)
        .only(this.metaPostPoemsConstructorKeys)
        .sortBy('createdAt', 'desc')
        .limit(this.limit)
        .fetch<DTOMetaPostPoemConstructor>()

      return !Array.isArray(poems)
        ? [poems]
        : poems
    },
    async fetchMetaPostPoemsRandom (): Promise<DTOMetaPostPoemConstructor[]> {
      const poems = await this.$content(this.fetchContentDirectory)
        .only(this.metaPostPoemsConstructorKeys)
        .fetch<DTOMetaPostPoemConstructor>()

      return !Array.isArray(poems)
        ? [poems]
        : poems
          .sort(() => 0.5 - Math.random())
          .slice(0, this.limit || undefined)
    }
  }
})
