import Vue from 'vue'
import type { VueConstructor } from 'vue'
import mixinPoemFirstTime from '@/utils/mixin.poem.firstTime'

export default (Vue as VueConstructor<
  Vue
  & InstanceType<typeof mixinPoemFirstTime>
>).extend({
  name: 'BlocksPoemsFirstTime',
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
