<template>
  <component
    :is="titleTag"
    :class="titleClasses"
    v-text="title"
  />
</template>

<script src="./Title.ts" lang="ts"></script>
<style src="./Title.css" scoped></style>
