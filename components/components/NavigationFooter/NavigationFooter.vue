<template>
  <nav class="navigation-footer">
    <WrappersNavigation>
      <ComponentsLinkText
        label="Polityka prywatności"
        to="/polityka-prywatnosci/"
      />
      <ComponentsButtonText
        data-test="open-privacy-modal"
        label="Ustawienia prywatności"
        @click="togglePrivacyModal"
      />
    </WrappersNavigation>
  </nav>
</template>

<script src="./NavigationFooter.ts" lang="ts"></script>
<style src="./NavigationFooter.css" scoped></style>
