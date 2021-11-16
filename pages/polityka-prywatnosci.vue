<template>
  <article class="page-polityka-prywatnosci">
    <BlocksPageMeta
      :title="dtoMetaPage.title"
    />
    <WrappersText>
      <NuxtContent :document="page" />
    </WrappersText>
  </article>
</template>

<script src="./polityka-prywatnosci.ts" lang="ts"></script>
