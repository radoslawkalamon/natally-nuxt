<template>
  <NuxtLink
    :class="classNames"
    v-bind="$attrs"
    v-on="$listeners"
    v-text="label"
  />
</template>

<script src="./Link.ts" lang="ts"></script>
<style src="./Link.css" scoped></style>
