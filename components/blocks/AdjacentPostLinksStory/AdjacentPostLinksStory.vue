<template>
  <div
    class="adjacent-post-links-story"
    data-test="blocks-adjacent-post-links-story"
  >
    <template v-if="$fetchState.pending || $fetchState.error">
      <ComponentsAdjacentPostLinkPlaceholder />
      <ComponentsAdjacentPostLinkPlaceholder />
    </template>
    <template v-else>
      <ComponentsAdjacentPostLinkPrevious
        v-if="previousStory"
        class="adjacent-post-links-story__previous"
        label="Poprzednie"
        :path="previousStory.path"
        :title="previousStory.title"
      />
      <ComponentsAdjacentPostLinkNext
        v-if="nextStory"
        class="adjacent-post-links-story__next"
        label="Następne"
        :path="nextStory.path"
        :title="nextStory.title"
      />
    </template>
  </div>
</template>

<script src="./AdjacentPostLinksStory.ts" lang="ts"></script>
<style src="./AdjacentPostLinksStory.css" scoped></style>
