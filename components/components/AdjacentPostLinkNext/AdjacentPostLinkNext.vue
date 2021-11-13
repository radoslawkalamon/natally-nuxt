<template>
  <NuxtLink
    class="adjacent-post-link-next"
    data-test="components-adjacent-post-link-next"
    :to="path"
  >
    <span
      class="adjacent-post-link-next__title"
      v-text="title"
    />
    <span
      class="adjacent-post-link-next__label"
      v-text="label"
    />
  </NuxtLink>
</template>

<script src="./AdjacentPostLinkNext.ts" lang="ts"></script>
<style src="./AdjacentPostLinkNext.css" scoped></style>
