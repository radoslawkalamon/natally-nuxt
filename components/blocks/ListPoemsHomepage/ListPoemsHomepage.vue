<template>
  <WrappersSection class="list-poems-homepage">
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
      :limit="6"
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

<script src="./ListPoemsHomepage.ts" lang="ts"></script>
<style src="./ListPoemsHomepage.css" scoped></style>
