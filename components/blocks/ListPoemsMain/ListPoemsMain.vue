<template>
  <WrappersListPoems
    class="list-poems-main"
    data-test="blocks-list-poems-main"
  >
    <template #loader>
      <template v-for="i in 6">
        <ComponentsCardPoemPlaceholder :key="i" />
      </template>
    </template>
    <template #default="{ metaPostPoems }">
      <template v-for="metaPostPoem in metaPostPoems">
        <ComponentsCardPoem
          :key="metaPostPoem.path"
          :meta-post-poem="metaPostPoem"
        />
      </template>
    </template>
  </WrappersListPoems>
</template>

<script src="./ListPoemsMain.ts" lang="ts"></script>
<style src="./ListPoemsMain.css" scoped></style>
