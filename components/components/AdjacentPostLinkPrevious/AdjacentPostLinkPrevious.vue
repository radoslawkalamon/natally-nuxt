<template>
  <NuxtLink
    class="adjacent-post-link-previous"
    data-test="components-adjacent-post-link-previous"
    :to="path"
  >
    <span
      class="adjacent-post-link-previous__title"
      v-text="title"
    />
    <span
      class="adjacent-post-link-previous__label"
      v-text="label"
    />
  </NuxtLink>
</template>

<script src="./AdjacentPostLinkPrevious.ts" lang="ts"></script>
<style src="./AdjacentPostLinkPrevious.css" scoped></style>
