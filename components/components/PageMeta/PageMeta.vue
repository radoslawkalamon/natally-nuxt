<template>
  <div
    class="page-meta"
    data-test="components-page-meta"
  >
    <header class="page-meta__header">
      <ComponentsTitle
        class="page-meta__title"
        :title="title"
      />
    </header>
    <footer
      v-if="datePublished"
      class="page-meta__footer"
      data-test="components-page-meta-footer"
    >
      <ComponentsTextMeta
        :aria-label="datePublishedLabel"
        class="page-meta__date-published"
        :text="datePublished"
        :title="datePublishedLabel"
      />
    </footer>
  </div>
</template>

<script src="./PageMeta.ts" lang="ts"></script>
<style src="./PageMeta.css" scoped></style>
