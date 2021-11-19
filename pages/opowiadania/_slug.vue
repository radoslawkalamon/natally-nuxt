<template>
  <article class="post-stories">
    <BlocksCoverStory :images="[dtoMetaPostStory.imageCover, dtoMetaPostStory.imageCover2x]" />
    <BlocksPageMeta
      :created-at="dtoMetaPostStory.createdAt"
      :title="dtoMetaPostStory.title"
    />
    <BlocksAudiobook :id="dtoMetaPostStory.audiobookId" />
    <WrappersTextStories>
      <NuxtContent :document="article" />
    </WrappersTextStories>
    <BlocksAdjacentPostLinksStory :slug="article.slug" />
    <BlocksListStoriesSuggestions />
    <BlocksListPoemsSuggestions />
    <BlocksProgressBar />
  </article>
</template>

<script src="./_slug.ts" lang="ts"></script>
