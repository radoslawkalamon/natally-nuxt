<template>
  <NuxtLink
    class="card-story"
    data-test="components-card-story"
    :to="url"
    :style="cardStoryStyle"
  >
    <ComponentsCoverStory
      class="card-story__cover"
      :image="coverImage"
      :image2x="coverImage2x"
    />
    <div class="card-story__content">
      <ComponentsTextMeta
        class="card-story__date-published"
        :text="datePublished"
      />
      <ComponentsTextMeta
        class="card-story__reading-time"
        :text="readingTime"
      />
      <ComponentsTextMeta
        :aria-hidden="(!isAudiobook).toString()"
        :class="isAudiobookClasses"
        data-test="components-card-story-audiobook"
        text="Audiobook"
      />
      <ComponentsTitle
        class="card-story__title"
        :title="title"
        :type="3"
        :shall-show-underscore="false"
      />
    </div>
  </NuxtLink>
</template>

<script src="./CardStory.ts" lang="ts"></script>
<style src="./CardStory.css" scoped></style>
