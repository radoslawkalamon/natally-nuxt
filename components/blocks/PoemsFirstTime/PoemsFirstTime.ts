import Vue from 'vue'
import type { VueConstructor } from 'vue'
import mixinPoemFirstTime from '@/utils/mixin.poem.firstTime'

export default (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinPoemFirstTime>
>).extend({
  name: 'BlocksPoemsFirstTime',
  components: {
    ComponentsButtonLink: () => import(/* webpackChunkName: "components" */'@/components/components/ButtonLink/ButtonLink.vue'),
    ComponentsTitle: () => import(/* webpackChunkName: "components" */'@/components/components/Title/Title.vue'),
    WrappersSection: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/Section/Section.vue'),
    WrappersText: () => import(/* webpackChunkName: "wrappers" */'@/components/wrappers/Text/Text.vue')
  },
  mixins: [mixinPoemFirstTime],
  computed: {
    shallShowSection (): boolean {
      return this['poem/firstTime/shallShow']
    }
  },
  mounted (): void {
    if (this.shallShowSection) {
      this['poem/firstTime/countVisit']()
    }
  }
})
