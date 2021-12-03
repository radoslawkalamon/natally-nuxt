<template>
  <ul class="list-audiobook-services">
    <template v-for="(audiobookService, index) in audiobookServices">
      <li
        :key="index"
        class="list-audiobook-services__item"
      >
        <ComponentsCardAudiobookService v-bind="audiobookService" />
      </li>
    </template>
  </ul>
</template>

<script src="./ListAudiobookServices.ts" lang="ts"></script>
<style src="./ListAudiobookServices.css" scoped></style>
