<template>
  <article class="page-polityka-prywatnosci">
    <LazyHydrate never>
      <BlocksPageMeta :title="dtoMetaPage.title" />
    </LazyHydrate>

    <LazyHydrate never>
      <WrappersText>
        <NuxtContent :document="page" />
      </WrappersText>
    </LazyHydrate>
  </article>
</template>

<script src="./polityka-prywatnosci.ts" lang="ts"></script>
