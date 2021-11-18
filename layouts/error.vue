<template>
  <article
    v-once
    class="page-error"
  >
    <BlocksAnimationPufferfish />
    <WrappersSection>
      <template #header>
        <ComponentsTitle
          title="Porobiło się!"
        />
      </template>
      <WrappersText>
        <p>
          Strona, której szukasz nie istnieje lub została usunięta!
        </p>
      </WrappersText>
      <template #footer>
        <ComponentsButtonLink
          label="Wróć na Stronę Główną"
          to="/"
        />
      </template>
    </WrappersSection>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import type { MetaInfo } from 'vue-meta'
import BlocksAnimationPufferfish from '@/components/blocks/AnimationPufferfish/AnimationPufferfish.vue'
import ComponentsButtonLink from '@/components/components/ButtonLink/ButtonLink.vue'
import ComponentsTitle from '@/components/components/Title/Title.vue'
import WrappersText from '@/components/wrappers/Text/Text.vue'
import WrappersSection from '@/components/wrappers/Section/Section.vue'
import { factoryHeadPageNotfound } from '@/utils/factory.head.page.notfound'

export default Vue.extend({
  components: {
    BlocksAnimationPufferfish,
    ComponentsButtonLink,
    ComponentsTitle,
    WrappersText,
    WrappersSection
  },
  head (): MetaInfo {
    return factoryHeadPageNotfound()
  }
})
</script>

<style>
.page-error {
  justify-content: center;
  min-height: 70vh;
  text-align: center;
}
</style>
