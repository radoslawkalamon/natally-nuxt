<template>
  <div class="grzeszki">
    <p class="grzeszki__breadcrumbs-area">
      <span class="grzeszki__text grzeszki__text--1">Batoniki</span>
      <span class="grzeszki__text grzeszki__text--2">Chipsy</span>
      <span class="grzeszki__text grzeszki__text--3">Paluszki</span>
      <span class="grzeszki__text grzeszki__text--4">Sucharki</span>
      <ClientOnly>
        <template v-for="i in 100">
          <span
            :key="i"
            aria-hidden="true"
            class="grzeszki__breadcrumb"
            data-test="poems-grzeszki-breadcrumb"
            :style="breadcrumbsStyle()"
          >,</span>
        </template>
      </ClientOnly>
    </p>
    <p>Wszystkie one</p>
    <p>w Twoim łożku</p>
  </div>
</template>

<script src="./Grzeszki.ts" lang="ts"></script>
<style src="./Grzeszki.css" scoped></style>
