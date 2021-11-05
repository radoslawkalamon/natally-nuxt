<template>
  <svg
    :aria-label="loadingLabel"
    class="loading"
    data-test="components-loading"
    :title="loadingLabel"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      class="loading__circle-1"
      cx="25"
      cy="25"
      r="21"
    />
    <circle
      class="loading__circle-2"
      cx="25"
      cy="25"
      r="21"
    />
  </svg>
</template>

<script src="./Loading.ts" lang="ts"></script>
<style src="./Loading.css" scoped></style>
