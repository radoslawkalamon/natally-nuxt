<template>
  <nav class="navigation-footer">
    <WrappersNavigation>
      <ComponentsLinkText
        label="Polityka prywatności"
        to="/polityka-prywatnosci/"
      />
      <ComponentsButton
        data-test="open-privacy-modal"
        label="Ustawienia prywatności"
        type="text"
        @click="togglePrivacyModal"
      />
    </WrappersNavigation>
  </nav>
</template>

<script src="./NavigationFooter.ts" lang="ts"></script>
<style src="./NavigationFooter.css" scoped></style>
