<template>
  <transition name="fade">
    <div
      v-if="shallShow"
      aria-hidden="true"
      class="loading-bar"
    >
      <ComponentsProgressBar
        class="loading-bar__inner"
        :width="progress"
      />
    </div>
  </transition>
</template>

<script src="./LoadingBar.ts" lang="ts"></script>
<style src="./LoadingBar.css" scoped></style>
