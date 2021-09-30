<template>
  <component
    :is="headerTag"
    :class="headerClasses"
    data-test="components-text-header"
    v-text="title"
  />
</template>

<script src="./TextHeader.ts" lang="ts"></script>
<style src="./TextHeader.css" scoped></style>
