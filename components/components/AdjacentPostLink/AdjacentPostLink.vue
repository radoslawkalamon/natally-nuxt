<template>
  <NuxtLink
    :class="classNames"
    :to="path"
  >
    <span
      class="adjacent-post-link__title"
      v-text="title"
    />
    <span
      class="adjacent-post-link__label"
      v-text="label"
    />
  </NuxtLink>
</template>

<script src="./AdjacentPostLink.ts" lang="ts"></script>
<style src="./AdjacentPostLink.css" scoped></style>
