<template>
  <div
    v-if="shallShowAudiobookBlock"
    class="audiobook"
  >
    <ClientOnly>
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
        <ComponentsButton
          data-test="blocks-audiobook-privacy-modal-open"
          label="zmień ustawienia prywatności"
          type="text"
          @click="togglePrivacyModal"
        />
      </WrappersText>
    </ClientOnly>
  </div>
</template>

<script src="./Audiobook.ts" lang="ts"></script>
<style src="./Audiobook.css" scoped></style>
