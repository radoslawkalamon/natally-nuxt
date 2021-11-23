<template>
  <article class="page-error">
    <BlocksAnimationPufferfish />
    <WrappersSection class="page-error__meta">
      <template #header>
        <ComponentsTitle title="Porobiło się!" />
      </template>
      <WrappersText>
        <p>Strona, której szukasz nie istnieje lub została usunięta!</p>
      </WrappersText>
      <template #footer>
        <ComponentsButtonLink
          label="Wróć na Stronę Główną"
          to="/"
        />
      </template>
    </WrappersSection>
    <BlocksListStoriesSuggestions />
    <BlocksListPoemsSuggestions />
  </article>
</template>

<script src="./404.ts" lang="ts"></script>

<style>
.page-error__meta {
  text-align: center;
}
</style>
