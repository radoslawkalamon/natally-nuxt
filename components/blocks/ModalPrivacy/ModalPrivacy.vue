<template>
  <WrappersModal
    v-if="shallOpenModalPrivacy"
    class="modal-privacy"
    data-test="blocks-modal-privacy"
    title="Ustawienia prywatności"
  >
    <ComponentsSwitch
      :checked="cookieCore"
      disabled
      label="Cookies funkcyjne"
      name="cookies-core"
    >
      <p>
        Nie&nbsp;możesz wyłączyć tych plików cookies, ponieważ są&nbsp;one niezbędne&nbsp;by strona działała prawidłowo.
      </p>
    </ComponentsSwitch>
    <ComponentsSwitch
      :checked="cookieSoundcloud"
      data-test="blocks-modal-privacy-soundcloud"
      label="Odtwarzacz Soundcloud"
      name="cookies-soundcloud"
      @change="updateCookieSoundcloud($event.target.checked)"
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
