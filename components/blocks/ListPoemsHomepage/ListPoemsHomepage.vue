<template>
  <WrappersSection
    class="list-poems-homepage"
    data-test="blocks-list-poems-homepage"
  >
    <template #header>
      <ComponentsTitle
        class="list-poems-homepage__title"
        :design="2"
        title="Poezja 3.14"
        :type="2"
      />
    </template>

    <WrappersListPoems
      class="list-poems-homepage__poems"
      :limit="poemsQuantity"
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

<script src="./ListPoemsHomepage.ts" lang="ts"></script>
<style src="./ListPoemsHomepage.css" scoped></style>
