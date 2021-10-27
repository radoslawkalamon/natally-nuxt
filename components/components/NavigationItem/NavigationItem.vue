<template>
  <button
    class="navigation-item"
    data-test="components-navigation-item"
    type="button"
    v-bind="$attrs"
    v-on="$listeners"
    v-text="label"
  />
</template>

<script src="./NavigationItem.ts" lang="ts"></script>
<style src="./NavigationItem.css" scoped></style>
