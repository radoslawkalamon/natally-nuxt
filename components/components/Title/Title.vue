<template>
  <component
    :is="titleTag"
    :class="titleClasses"
  >
    {{ title }}
  </component>
</template>

<script src="./Title.ts" lang="ts"></script>
<style src="./Title.css" scoped></style>
