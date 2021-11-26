<template>
  <div class="adjacent-post-links-poem">
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
  </div>
</template>

<script src="./AdjacentPostLinksPoem.ts" lang="ts"></script>
<style src="./AdjacentPostLinksPoem.css" scoped></style>
