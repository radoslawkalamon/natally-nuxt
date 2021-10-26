<template>
  <section
    class="section"
    data-test="wrappers-section"
  >
    <header
      v-if="$slots.header"
      class="section__header"
      data-test="wrappers-section-header"
    >
      <slot name="header" />
    </header>
    <div class="section__inner">
      <slot />
    </div>
    <footer
      v-if="$slots.footer"
      class="section__footer"
      data-test="wrappers-section-footer"
    >
      <slot name="footer" />
    </footer>
  </section>
</template>

<script src="./Section.ts" lang="ts"></script>
<style src="./Section.css" scoped></style>
