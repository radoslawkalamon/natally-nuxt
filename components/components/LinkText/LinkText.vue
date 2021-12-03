<template>
  <NuxtLink
    class="link-text"
    v-bind="$attrs"
    v-on="$listeners"
    v-text="label"
  />
</template>

<script src="./LinkText.ts" lang="ts"></script>
<style src="./LinkText.css" scoped></style>
