<template>
  <div
    class="audiobook"
    data-test="blocks-audiobook"
  >
    <iframe
      v-if="shallShowPlayer"
      width="100%"
      height="128"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      :src="src"
    />
    <WrappersText v-else>
      Aby odsłuchać audiobooka,<br>
      <button
        class="audiobook__button"
        @click="toggleModalPrivacy"
      >
        zmień ustawienia prywatności
      </button>
    </WrappersText>
  </div>
</template>

<script src="./Audiobook.ts" lang="ts"></script>
<style src="./Audiobook.css" scoped></style>
