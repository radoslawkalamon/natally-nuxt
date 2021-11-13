<template>
  <div
    aria-hidden="true"
    class="progress-bar"
    data-test="blocks-progress-bar"
  >
    <div
      class="progress-bar__inner"
      :style="style"
    />
  </div>
</template>

<script src="./ProgressBar.ts" lang="ts"></script>
<style src="./ProgressBar.css" scoped></style>
