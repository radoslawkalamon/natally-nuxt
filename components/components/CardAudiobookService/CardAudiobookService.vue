<template>
  <a
    class="card-audiobook-service"
    :href="url"
    rel="noopener noreferrer"
    target="_blank"
  >
    <div class="card-audiobook-service__logo-wrapper">
      <img
        :alt="iconAlt"
        class="card-audiobook-service__logo"
        :src="icon"
      >
    </div>
    <div class="card-audiobook-service__meta-wrapper">
      <span class="card-audiobook-service__cta">
        Posłuchaj w
      </span>
      <span
        class="card-audiobook-service__name"
        v-text="name"
      />
    </div>
  </a>
</template>

<script src="./CardAudiobookService.ts" lang="ts"></script>
<style src="./CardAudiobookService.css" scoped></style>
