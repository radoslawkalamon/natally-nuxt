<template>
  <WrappersModal
    v-if="shallShowPrivacyModal"
    class="modal-privacy"
    title="Ustawienia prywatności"
  >
    <ComponentsSwitch
      :checked="privacyStorageCore"
      disabled
      label="Funkcjonalności własne"
      name="cookies-core"
    >
      <p>
        Nie&nbsp;możesz wyłączyć tych funkcjonalności, ponieważ są&nbsp;one niezbędne&nbsp;by strona działała prawidłowo.
      </p>
    </ComponentsSwitch>
    <ComponentsSwitch
      :checked="privacyStorageSoundcloud"
      data-test="blocks-modal-privacy-soundcloud"
      label="Odtwarzacz Soundcloud"
      name="cookies-soundcloud"
      @change="setPrivacyStorageSoundcloud($event.target.checked)"
    >
      <p>
        Na&nbsp;blogu osadzany jest odtwarzacz audiobooków. W&nbsp;związku z&nbsp;tym, wykorzystywane są&nbsp;pliki cookies SoundCloud. Jeżeli włączysz te&nbsp;pliki cookies, audiobooki będą dla Ciebie dostępne.
      </p>
    </ComponentsSwitch>
    <ComponentsButton
      class="modal-privacy__button"
      data-test="blocks-modal-privacy-apply-settings"
      label="Zapisz ustawienia"
      @click="applyCookieSettings"
    />
  </WrappersModal>
</template>

<script src="./ModalPrivacy.ts" lang="ts"></script>
<style src="./ModalPrivacy.css" scoped></style>
