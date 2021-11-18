<template>
  <div
    aria-label="Animacja przedstawia rozdymkę unoszącą się na wodzie"
    class="animation-pufferfish"
    data-test="blocks-animation-pufferfish"
  >
    <img
      class="animation-pufferfish__fish"
      srcset="./images/puffer-fish.1x.webp 1x, ./images/puffer-fish.2x.webp 2x"
      src="./images/puffer-fish.1x.webp"
      width="200"
      height="168"
    >
    <template v-for="index in 3">
      <img
        :key="index"
        :class="`animation-pufferfish__wave animation-pufferfish__wave--${index}`"
        srcset="./images/wave.1x.webp 1x, ./images/wave.2x.webp 2x"
        src="./images/wave.1x.webp"
        width="162"
        height="48"
      >
    </template>
  </div>
</template>

<script src="./AnimationPufferfish.ts" lang="ts"></script>
<style src="./AnimationPufferfish.css" scoped></style>
