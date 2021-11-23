<template>
  <article class="post-stories">
    <LazyHydrate never>
      <BlocksCoverStory :images="[dtoMetaPostStory.imageCover, dtoMetaPostStory.imageCover2x]" />
    </LazyHydrate>

    <LazyHydrate never>
      <BlocksPageMeta
        :created-at="dtoMetaPostStory.createdAt"
        :title="dtoMetaPostStory.title"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <BlocksAudiobook :id="dtoMetaPostStory.audiobookId" />
    </LazyHydrate>

    <LazyHydrate never>
      <WrappersTextStories>
        <NuxtContent :document="article" />
      </WrappersTextStories>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <BlocksAdjacentPostLinksStory :slug="article.slug" />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <BlocksListStoriesSuggestions :without="[article.path]" />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <BlocksListPoemsSuggestions :without="[article.path]" />
    </LazyHydrate>

    <BlocksReadingProgress />
  </article>
</template>

<script src="./_slug.ts" lang="ts"></script>
