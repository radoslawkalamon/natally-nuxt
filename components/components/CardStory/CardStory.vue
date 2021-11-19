<template>
  <article
    class="card-story"
    data-test="components-card-story"
  >
    <NuxtLink
      class="card-story__link"
      :to="path"
    >
      <ComponentsCover
        class="card-story__cover"
        :images="[imageCover, imageCover2x]"
      />
      <div class="card-story__content">
        <footer class="card-story__footer">
          <ComponentsTextMeta
            :aria-label="datePublishedLabel"
            class="card-story__date-published"
            :text="datePublished"
            :title="datePublishedLabel"
          />
          <ComponentsTextMeta
            :aria-label="readingTimeLabel"
            class="card-story__reading-time"
            :text="readingTime"
            :title="readingTimeLabel"
          />
          <ComponentsTextMeta
            :aria-label="isAudiobookLabel"
            :class="isAudiobookClasses"
            data-test="components-card-story-audiobook"
            text="Audiobook"
            :title="isAudiobookLabel"
          />
        </footer>
        <header class="card-story__header">
          <ComponentsTitle
            class="card-story__title"
            :design="3"
            :title="title"
            :type="1"
            :shall-show-underscore="false"
          />
        </header>
      </div>
    </NuxtLink>
  </article>
</template>

<script src="./CardStory.ts" lang="ts"></script>
<style src="./CardStory.css" scoped></style>
