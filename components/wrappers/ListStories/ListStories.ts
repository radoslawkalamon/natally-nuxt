import Vue from 'vue'
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
    },
    without: {
      type: Array as Vue.PropType<string[]>,
      default: () => []
    }
  },
  data (): Record<string, DTOMetaPostStoryConstructor[]> {
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
    async fetchMetaPostStory (): Promise<DTOMetaPostStoryConstructor[]> {
      const stories = await this.$content(this.fetchContentDirectory)
        .where({ path: { $nin: this.without } })
        .only(this.metaPostStoryConstructorKeys)
        .sortBy('createdAt', 'desc')
        .limit(this.limit)
        .fetch<DTOMetaPostStoryConstructor>()

      return !Array.isArray(stories)
        ? [stories]
        : stories
    },
    async fetchMetaPostStoryRandom (): Promise<DTOMetaPostStoryConstructor[]> {
      const stories = await this.$content(this.fetchContentDirectory)
        .where({ path: { $nin: this.without } })
        .only(this.metaPostStoryConstructorKeys)
        .fetch<DTOMetaPostStoryConstructor>()

      return !Array.isArray(stories)
        ? [stories]
        : stories
          .sort(() => 0.5 - Math.random())
          .slice(0, this.limit || undefined)
    }
  }
})
