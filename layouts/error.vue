<template>
  <article class="page-error">
    <BlocksAnimationPufferfish />
    <BlocksPageMeta404 />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import type { MetaInfo } from 'vue-meta'
import BlocksAnimationPufferfish from '@/components/blocks/AnimationPufferfish/AnimationPufferfish.vue'
import BlocksPageMeta404 from '@/components/blocks/PageMeta404/PageMeta404.vue'
import { factoryHeadPageNotfound } from '@/utils/factory.head.page.notfound'

export default Vue.extend({
  name: 'Page404',
  components: {
    BlocksAnimationPufferfish,
    BlocksPageMeta404
  },
  head (): MetaInfo {
    return factoryHeadPageNotfound()
  }
})
</script>
