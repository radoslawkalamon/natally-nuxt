<template>
  <article class="page-homepage">
    <LazyHydrate never>
      <BlocksAboutMe />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <BlocksListStoriesMain />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <BlocksListPoemsHomepage />
    </LazyHydrate>
  </article>
</template>

<script src="./index.ts" lang="ts"></script>
