<template>
  <WrappersSection class="page-meta-404">
    <template #header>
      <ComponentsTitle title="Porobiło się!" />
    </template>
    <WrappersText>
      <p>Strona, której szukasz nie istnieje lub została usunięta!</p>
    </WrappersText>
    <template #footer>
      <ComponentsLink
        label="Wróć na Stronę Główną"
        to="/"
        type="button"
      />
    </template>
  </WrappersSection>
</template>

<script src="./PageMeta404.ts" lang="ts"></script>
<style src="./PageMeta404.css" scoped></style>
