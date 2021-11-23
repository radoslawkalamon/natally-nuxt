<template>
  <article class="page-error">
    <LazyHydrate never>
      <BlocksAnimationPufferfish />
    </LazyHydrate>

    <LazyHydrate when-idle>
      <BlocksPageMeta404 />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <BlocksListStoriesSuggestions />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <BlocksListPoemsSuggestions />
    </LazyHydrate>
  </article>
</template>

<script src="./404.ts" lang="ts"></script>
