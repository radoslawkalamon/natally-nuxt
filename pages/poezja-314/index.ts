import Vue from 'vue'
import type { VueConstructor } from 'vue'
import PageHomepage from '@/pages/index.vue'
import { DTOMetaPageConstructor } from '@/utils/dto.meta.page'
import mixinPoemFirstTime from '@/utils/mixin.poem.firstTime'

export default (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinPoemFirstTime>
>).extend({
  name: 'PagePoezja314',
  components: {
    BlocksListPoemsMain: () => import(/* webpackChunkName: "blocks-list-poems-main" */'@/components/blocks/ListPoemsMain/ListPoemsMain.vue'),
    BlocksPageMeta: () => import(/* webpackChunkName: "blocks-page-meta" */'@/components/blocks/PageMeta/PageMeta.vue'),
    WrappersText: () => import(/* webpackChunkName: "wrappers-text" */'@/components/wrappers/Text/Text.vue')
  },
  extends: PageHomepage,
  mixins: [mixinPoemFirstTime],
  async asyncData ({ $content }) {
    const page = await $content()
      .where({ path: '/poezja-314' })
      .fetch<DTOMetaPageConstructor>()

    return { page: page.pop() }
  },
  mounted (): void {
    this['poem/firstTime/hideSection']()
  }
})
