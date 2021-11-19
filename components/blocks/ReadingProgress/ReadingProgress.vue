<template>
  <div
    aria-hidden="true"
    class="reading-progress"
    data-test="blocks-reading-progress"
  >
    <ComponentsProgressBar
      class="reading-progress__inner"
      :width="progress"
    />
  </div>
</template>

<script src="./ReadingProgress.ts" lang="ts"></script>
<style src="./ReadingProgress.css" scoped></style>
