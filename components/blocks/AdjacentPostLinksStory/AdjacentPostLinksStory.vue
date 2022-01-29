<template>
  <div class="adjacent-post-links-story">
    <ComponentsAdjacentPostLink
      v-if="previousStory"
      class="adjacent-post-links-story__previous"
      label="Poprzednie"
      :path="previousStory.path"
      :title="previousStory.title"
      type="previous"
    />
    <ComponentsAdjacentPostLink
      v-if="nextStory"
      class="adjacent-post-links-story__next"
      label="Następne"
      :path="nextStory.path"
      :title="nextStory.title"
      type="next"
    />
  </div>
</template>

<script src="./AdjacentPostLinksStory.ts" lang="ts"></script>
<style src="./AdjacentPostLinksStory.css" scoped></style>
