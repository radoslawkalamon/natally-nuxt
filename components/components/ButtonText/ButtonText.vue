<template>
  <button
    class="button-text"
    type="button"
    v-bind="$attrs"
    v-on="$listeners"
    v-text="label"
  />
</template>

<script src="./ButtonText.ts" lang="ts"></script>
<style src="./ButtonText.css" scoped></style>
