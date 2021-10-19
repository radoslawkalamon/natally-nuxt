<template>
  <button
    class="navigation-item"
    data-test="components-navigation-item"
    type="button"
    @click="onClick"
    v-text="label"
  />
</template>

<script src="./NavigationItem.ts" lang="ts"></script>
<style src="./NavigationItem.css" scoped></style>
