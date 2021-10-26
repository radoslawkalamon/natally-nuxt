<template>
  <div
    v-once
    class="about-me"
    data-test="blocks-about-me"
  >
    <img
      alt="Zdjęcie przedstawia Radosława Kalamona"
      class="about-me__image"
      height="120"
      src="./images/radoslaw-kalamon.1x.webp"
      srcset="./images/radoslaw-kalamon.1x.webp 1x, ./images/radoslaw-kalamon.2x.webp 2x"
      width="120"
    >
    <WrappersText class="about-me__text">
      <p>
        Cześć! Jesteś na blogu 169cm.pl. Ja jestem Radosław Kalamon. Chodź ze mną. Usiądźmy przy ognisku i spójrzmy do góry w czarne niebo upstrzone tysiącem białych punktów. Ty zacznij wypatrywać spadających gwiazd, a ja opowiem Ci historię o jednej z nich.
      </p>
    </WrappersText>
  </div>
</template>

<script src="./AboutMe.ts" lang="ts"></script>
<style src="./AboutMe.css" scoped></style>
