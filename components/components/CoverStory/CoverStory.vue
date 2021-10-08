<template v-once>
  <picture
    class="cover-story"
    data-test="components-cover-story"
  >
    <img
      class="cover-story__image"
      :alt="alternativeText"
      data-test="components-cover-story-image"
      :srcset="srcset"
      :src="src"
    >
  </picture>
</template>

<script src="./CoverStory.ts" lang="ts"></script>
<style src="./CoverStory.css" scoped></style>
