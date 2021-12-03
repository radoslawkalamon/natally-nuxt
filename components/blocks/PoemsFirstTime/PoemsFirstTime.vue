<template>
  <WrappersSection
    v-if="shallShowSection"
    class="poems-first-time"
  >
    <template #header>
      <ComponentsTitle
        :design="2"
        :type="2"
        title="Pierwszy raz?"
      />
    </template>

    <WrappersText>
      <p>Chcesz dowiedzieć&nbsp;się więcej o&nbsp;Poezji&nbsp;3.14?</p>
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
