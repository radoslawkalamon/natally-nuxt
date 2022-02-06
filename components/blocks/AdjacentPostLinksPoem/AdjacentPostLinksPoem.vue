<template>
  <div class="adjacent-post-links-poem">
    <ComponentsAdjacentPostLink
      v-if="previousPoem"
      class="adjacent-post-links-poem__previous"
      label="Poprzednia"
      :path="previousPoem.path"
      :title="previousPoem.title"
      type="previous"
    />
    <ComponentsAdjacentPostLink
      v-if="nextPoem"
      class="adjacent-post-links-poem__next"
      label="Następna"
      :path="nextPoem.path"
      :title="nextPoem.title"
      type="next"
    />
  </div>
</template>

<script src="./AdjacentPostLinksPoem.ts" lang="ts"></script>
<style src="./AdjacentPostLinksPoem.css" scoped></style>
