<template>
  <NuxtLink
    class="navigation-item-link"
    data-test="components-navigation-item-link"
    v-bind="$attrs"
    v-text="label"
  />
</template>

<script src="./NavigationItemLink.ts" lang="ts"></script>
<style src="./NavigationItemLink.css" scoped></style>
