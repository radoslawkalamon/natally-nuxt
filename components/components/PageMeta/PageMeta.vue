<template>
  <div
    class="page-meta"
    data-test="components-page-meta"
  >
    <header>
      <ComponentsTitle :title="title" />
    </header>
    <footer
      v-if="shallShowDate"
      data-test="components-page-meta-footer"
    >
      <ComponentsTextMeta
        :aria-label="dateMetaLabel"
        :text="dateMeta"
        :title="dateMetaLabel"
      />
    </footer>
  </div>
</template>

<script src="./PageMeta.ts" lang="ts"></script>
<style src="./PageMeta.css" scoped></style>
