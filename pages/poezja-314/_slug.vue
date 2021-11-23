<template>
  <article class="post-poezja-314">
    <LazyHydrate never>
      <BlocksCoverPoem :images="[dtoMetaPostPoem.imageCover]" />
    </LazyHydrate>

    <LazyHydrate never>
      <BlocksPageMeta
        :created-at="dtoMetaPostPoem.createdAt"
        :title="dtoMetaPostPoem.title"
      />
    </LazyHydrate>

    <LazyHydrate
      never
      :trigger-hydration="isCustomComponent"
    >
      <WrappersTextPoems>
        <component
          :is="articleComponent"
          v-bind="articleProps"
        />
      </WrappersTextPoems>
    </LazyHydrate>

    <LazyHydrate when-visible>
      <BlocksAdjacentPostLinksPoem :slug="article.slug" />
    </LazyHydrate>

    <ClientOnly>
      <LazyHydrate when-visible>
        <BlocksPoemsFirstTime />
      </LazyHydrate>
    </ClientOnly>

    <LazyHydrate when-visible>
      <BlocksListPoemsSuggestions :without="[article.path]" />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <BlocksListStoriesSuggestions :without="[article.path]" />
    </LazyHydrate>
  </article>
</template>

<script src="./_slug.ts" lang="ts"></script>
