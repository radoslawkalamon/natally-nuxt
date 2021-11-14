<template>
  <article class="post-stories">
    <ComponentsCoverStory
      :image="dtoMetaPostStory.imageCover"
      :image2x="dtoMetaPostStory.imageCover2x"
    />
    <ComponentsPageMeta
      :date-published="storyDatePublished"
      :title="dtoMetaPostStory.title"
    />
    <BlocksAudiobook :id="dtoMetaPostStory.audiobookId" />
    <WrappersTextStories>
      <NuxtContent
        data-progress-bar-hook
        :document="article"
      />
    </WrappersTextStories>
    <BlocksAdjacentPostLinksStory :slug="article.slug" />
    <BlocksListStoriesSuggestions />
    <BlocksListPoemsSuggestions />
    <BlocksProgressBar />
  </article>
</template>

<script src="./_slug.ts" lang="ts"></script>
