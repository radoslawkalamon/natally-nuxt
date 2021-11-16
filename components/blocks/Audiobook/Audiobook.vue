<template>
  <div
    class="audiobook"
    data-test="blocks-audiobook"
  >
    <client-only>
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
    </client-only>
  </div>
</template>

<script src="./Audiobook.ts" lang="ts"></script>
<style src="./Audiobook.css" scoped></style>
