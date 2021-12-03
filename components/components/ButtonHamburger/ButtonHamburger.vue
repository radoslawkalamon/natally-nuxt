<template>
  <button
    :aria-label="ariaLabel"
    class="button-hamburger"
    type="button"
    @click="clickCallback"
  >
    <template v-for="i in 3">
      <div
        :key="i"
        aria-hidden="true"
        :data-open="isOpen.toString()"
        :class="lineClassNames(i)"
      />
    </template>
  </button>
</template>

<script src="./ButtonHamburger.ts" lang="ts"></script>
<style src="./ButtonHamburger.css" scoped></style>
