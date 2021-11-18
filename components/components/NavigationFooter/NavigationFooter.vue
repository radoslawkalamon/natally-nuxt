<template>
  <nav
    v-once
    class="navigation-footer"
    data-test="components-navigation-footer"
  >
    <WrappersNavigation>
      <ComponentsLinkText
        label="Polityka prywatności"
        to="/polityka-prywatnosci/"
      />
      <ComponentsButtonText
        data-test="components-navigation-footer-privacy-modal"
        label="Ustawienia prywatności"
        @click="togglePrivacyModal"
      />
    </WrappersNavigation>
  </nav>
</template>

<script src="./NavigationFooter.ts" lang="ts"></script>
<style src="./NavigationFooter.css" scoped></style>
