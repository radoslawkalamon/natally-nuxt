<template>
  <WrappersSection
    class="list-poems-suggestions"
    data-test="blocks-list-poems-suggestions"
  >
    <template #header>
      <ComponentsTitle
        class="list-poems-suggestions__title"
        :design="2"
        title="Poezja 3.14"
        :type="2"
      />
    </template>

    <WrappersListPoems
      class="list-poems-suggestions__poems"
      :limit="poemsQuantity"
      :randomize="true"
    >
      <template #loader>
        <template v-for="i in poemsQuantity">
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

    <template #footer>
      <ComponentsButtonLink
        label="Więcej Poezji 3.14"
        to="/poezja-314/"
      />
    </template>
  </WrappersSection>
</template>

<script src="./ListPoemsSuggestions.ts" lang="ts"></script>
<style src="./ListPoemsSuggestions.css" scoped></style>
