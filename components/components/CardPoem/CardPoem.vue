<template>
  <article
    class="card-poem"
    data-test="components-card-poem"
  >
    <NuxtLink
      class="card-poem__link"
      :to="path"
    >
      <ComponentsCover
        class="card-poem__cover"
        :images="[imageCover]"
      />
      <div class="card-poem__content">
        <header class="card-poem__header">
          <ComponentsTitle
            class="card-poem__title"
            :design="3"
            :title="title"
            :type="1"
            :shall-show-underscore="false"
          />
        </header>
        <footer class="card-poem__footer">
          <ComponentsTextMeta
            :aria-label="datePublishedLabel"
            class="card-poem__meta"
            :text="datePublished"
            :title="datePublishedLabel"
          />
        </footer>
      </div>
    </NuxtLink>
  </article>
</template>

<script src="./CardPoem.ts" lang="ts"></script>
<style src="./CardPoem.css" scoped></style>
