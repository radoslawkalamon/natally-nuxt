<template>
  <article class="page-audiobooki">
    <ComponentsPageMeta
      :title="dtoMetaPage.title"
    />
    <WrappersText>
      <NuxtContent :document="page" />
    </WrappersText>
    <BlocksListAudiobookServices />
  </article>
</template>

<script src="./audiobooki.ts" lang="ts"></script>
