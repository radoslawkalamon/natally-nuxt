<template>
  <article class="page-poezja-314">
    <LazyHydrate never>
      <BlocksPageMeta :title="dtoMetaPage.title" />
    </LazyHydrate>

    <LazyHydrate never>
      <WrappersText>
        <NuxtContent :document="page" />
      </WrappersText>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <BlocksListPoemsMain />
    </LazyHydrate>
  </article>
</template>

<script src="./index.ts" lang="ts"></script>
