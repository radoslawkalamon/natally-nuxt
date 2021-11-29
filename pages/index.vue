<template>
  <article class="page-homepage">
    <LazyHydrate never>
      <BlocksAboutMe />
    </LazyHydrate>

    <BlocksListStoriesMain />

    <LazyHydrate when-visible>
      <BlocksListPoemsHomepage />
    </LazyHydrate>
  </article>
</template>

<script src="./index.ts" lang="ts"></script>
