<template>
  <button
    :class="classNames"
    type="button"
    v-bind="$attrs"
    v-on="$listeners"
    v-text="label"
  />
</template>

<script src="./Button.ts" lang="ts"></script>
<style src="./Button.css" scoped></style>
