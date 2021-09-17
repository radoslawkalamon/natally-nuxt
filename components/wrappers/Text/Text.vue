<template>
  <div
    :class="wrapperClasses"
    :data-test="wrapperTestId"
  >
    <slot />
  </div>
</template>

<script src="./Text.ts" lang="ts"></script>
<style src="./Text.css" scoped></style>
