<template>
  <article class="page-poezja-314">
    <ComponentsPageMeta
      :title="dtoMetaPage.title"
    />
    <WrappersText>
      <NuxtContent :document="page" />
    </WrappersText>
    <BlocksListPoemsMain />
  </article>
</template>

<script src="./index.ts" lang="ts"></script>
