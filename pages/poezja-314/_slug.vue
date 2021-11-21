<template>
  <article class="post-poezja-314">
    <BlocksCoverPoem :images="[dtoMetaPostPoem.imageCover]" />
    <BlocksPageMeta
      :created-at="dtoMetaPostPoem.createdAt"
      :title="dtoMetaPostPoem.title"
    />
    <WrappersTextPoems>
      <component
        :is="articleComponent"
        v-bind="articleProps"
      />
    </WrappersTextPoems>
    <BlocksAdjacentPostLinksPoem :slug="article.slug" />
    <ClientOnly>
      <BlocksPoemsFirstTime />
    </ClientOnly>
    <BlocksListPoemsSuggestions :without="[article.path]" />
    <BlocksListStoriesSuggestions :without="[article.path]" />
  </article>
</template>

<script src="./_slug.ts" lang="ts"></script>
