<template>
  <button
    class="button"
    data-test="components-button"
    type="button"
    @click="onClick"
    v-text="label"
  />
</template>

<script src="./Button.ts" lang="ts"></script>
<style src="./Button.css" scoped></style>
