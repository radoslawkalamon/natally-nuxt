<template>
  <article class="page-audiobooki">
    <LazyHydrate never>
      <BlocksPageMeta :title="dtoMetaPage.title" />
    </LazyHydrate>

    <LazyHydrate never>
      <WrappersText>
        <NuxtContent :document="page" />
      </WrappersText>
    </LazyHydrate>

    <LazyHydrate never>
      <BlocksListAudiobookServices />
    </LazyHydrate>
  </article>
</template>

<script src="./audiobooki.ts" lang="ts"></script>
