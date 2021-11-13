<template>
  <article class="post-poezja-314">
    <ComponentsCoverPoem
      :image="dtoMetaPostPoem.imageCover"
    />
    <ComponentsPageMeta
      :date-published="poemDatePublished"
      :title="dtoMetaPostPoem.title"
    />
    <WrappersTextPoems>
      <component
        :is="articleComponent"
        v-bind="articleProps"
      />
    </WrappersTextPoems>
    <BlocksAdjacentPostLinksPoem
      :slug="article.slug"
    />
    <BlocksPoemsFirstTime />
    <BlocksListPoemsSuggestions />
    <BlocksListStoriesSuggestions />
  </article>
</template>

<script src="./_slug.ts" lang="ts"></script>
