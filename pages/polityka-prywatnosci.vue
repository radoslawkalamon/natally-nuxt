<template>
  <article class="page-polityka-prywatnosci">
    <ComponentsPageMeta
      :title="dtoMetaPage.title"
    />
    <WrappersText>
      <NuxtContent :document="page" />
    </WrappersText>
  </article>
</template>

<script src="./polityka-prywatnosci.ts" lang="ts"></script>
