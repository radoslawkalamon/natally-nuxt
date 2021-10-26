<template>
  <WrappersSection
    v-once
    class="poems-first-time"
    data-test="blocks-poems-first-time"
  >
    <template #header>
      <ComponentsTitle
        :design="2"
        :type="2"
        title="Pierwszy raz?"
      />
    </template>
    <WrappersText>
      Chcesz dowiedzieć się więcej o Poezji 3.14?
    </WrappersText>
    <template #footer>
      <ComponentsButtonLink
        label="Tak, z przyjemnością!"
        to="/poezja-314/"
      />
    </template>
  </WrappersSection>
</template>

<script src="./PoemsFirstTime.ts" lang="ts"></script>
<style src="./PoemsFirstTime.css" scoped></style>
