<template>
  <article class="page-error">
    <BlocksAnimationPufferfish />
    <BlocksPageMeta404 />
    <BlocksListStoriesSuggestions />
    <BlocksListPoemsSuggestions />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import type { MetaInfo } from 'vue-meta'
import BlocksAnimationPufferfish from '@/components/blocks/AnimationPufferfish/AnimationPufferfish.vue'
import BlocksPageMeta404 from '@/components/blocks/PageMeta404/PageMeta404.vue'
import BlocksListPoemsSuggestions from '@/components/blocks/ListPoemsSuggestions/ListPoemsSuggestions.vue'
import BlocksListStoriesSuggestions from '@/components/blocks/ListStoriesSuggestions/ListStoriesSuggestions.vue'
import { factoryHeadPageNotfound } from '@/utils/factory.head.page.notfound'

export default Vue.extend({
  name: 'Page404',
  components: {
    BlocksAnimationPufferfish,
    BlocksPageMeta404,
    BlocksListPoemsSuggestions,
    BlocksListStoriesSuggestions
  },
  head (): MetaInfo {
    return factoryHeadPageNotfound()
  }
})
</script>
