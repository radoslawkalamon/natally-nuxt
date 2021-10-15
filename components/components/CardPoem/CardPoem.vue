<template>
  <NuxtLink
    class="card-poem"
    data-test="components-card-poem"
    :to="url"
  >
    <ComponentsCoverPoem
      class="card-poem__cover"
      :image="coverImage"
    />
    <div class="card-poem__content">
      <ComponentsTitle
        class="card-poem__title"
        :title="title"
        :type="3"
        :shall-show-underscore="false"
      />
      <ComponentsTextMeta
        class="card-poem__meta"
        :text="datePublished"
      />
    </div>
  </NuxtLink>
</template>

<script src="./CardPoem.ts" lang="ts"></script>
<style src="./CardPoem.css" scoped></style>
