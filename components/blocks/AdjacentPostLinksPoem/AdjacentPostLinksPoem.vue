<template>
  <div
    class="adjacent-post-links-poem"
    data-test="blocks-adjacent-post-links-poem"
  >
    <template v-if="$fetchState.pending || $fetchState.error">
      <ComponentsAdjacentPostLinkPlaceholder />
      <ComponentsAdjacentPostLinkPlaceholder />
    </template>
    <template v-else>
      <ComponentsAdjacentPostLinkPrevious
        v-if="previousPoem"
        class="adjacent-post-links-poem__previous"
        label="Poprzednia"
        :path="previousPoem.path"
        :title="previousPoem.title"
      />
      <ComponentsAdjacentPostLinkNext
        v-if="nextPoem"
        class="adjacent-post-links-poem__next"
        label="Następna"
        :path="nextPoem.path"
        :title="nextPoem.title"
      />
    </template>
  </div>
</template>

<script src="./AdjacentPostLinksPoem.ts" lang="ts"></script>
<style src="./AdjacentPostLinksPoem.css" scoped></style>
