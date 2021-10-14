<template>
  <component
    :is="tag"
    v-bind="attributes"
    v-on="listeners"
    v-text="label"
  />
</template>

<script src="./Button.ts" lang="ts"></script>
<style src="./Button.css" scoped></style>
