import Vue from 'vue'
import { FetchReturn } from '@nuxt/content/types/query-builder'
import { DTOMetaPostStoryConstructor, DTOMetaPostStory } from '@/utils/dto.meta.post.story'

export default Vue.extend({
  name: 'WrappersListStories',
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
  data (): Record<string, FetchReturn | FetchReturn[]> {
    return {
      stories: []
    }
  },
  async fetch (): Promise<void> {
    this.stories = this.randomize
      ? await this.fetchMetaPostStoryRandom()
      : await this.fetchMetaPostStory()
  },
  computed: {
    fetchContentDirectory (): string {
      return '/opowiadania'
    },
    metaPostStoryConstructorKeys (): string[] {
      return ['audiobookId', 'createdAt', 'description', 'imageCover', 'imageCover2x', 'imageOpenGraph', 'path', 'timeReading', 'title', 'updatedAt']
    },
    metaPostStories (): DTOMetaPostStory[] {
      return this.stories.map((i: DTOMetaPostStoryConstructor) => new DTOMetaPostStory(i))
    }
  },
  methods: {
    async fetchMetaPostStory (): Promise<FetchReturn[] | FetchReturn> {
      return await this.$content(this.fetchContentDirectory)
        .only(this.metaPostStoryConstructorKeys)
        .sortBy('createdAt', 'desc')
        .limit(this.limit)
        .fetch()
    },
    async fetchMetaPostStoryRandom (): Promise<FetchReturn[] | FetchReturn> {
      return (await this.$content(this.fetchContentDirectory)
        .only(this.metaPostStoryConstructorKeys)
        .fetch())
        .sort(() => 0.5 - Math.random())
        .slice(0, this.limit || undefined)
    }
  }
})
