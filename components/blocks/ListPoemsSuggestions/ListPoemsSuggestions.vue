<template>
  <WrappersSection class="list-poems-suggestions">
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
      :limit="6"
      :randomize="true"
      :without="without"
    >
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
      <ComponentsLink
        label="Więcej Poezji 3.14"
        to="/poezja-314/"
        type="button"
      />
    </template>
  </WrappersSection>
</template>

<script src="./ListPoemsSuggestions.ts" lang="ts"></script>
<style src="./ListPoemsSuggestions.css" scoped></style>
