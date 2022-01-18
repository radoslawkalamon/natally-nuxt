<template>
  <section class="section">
    <div
      v-if="$slots.header"
      class="section__header"
      data-test="wrappers-section-header"
    >
      <slot name="header" />
    </div>
    <div class="section__inner">
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="section__footer"
      data-test="wrappers-section-footer"
    >
      <slot name="footer" />
    </div>
  </section>
</template>

<script src="./Section.ts" lang="ts"></script>
<style src="./Section.css" scoped></style>
