<template>
  <nav
    v-once
    class="navigation-footer"
    data-test="blocks-navigation-footer"
  >
    <WrappersNavigation>
      <ComponentsNavigationItemLink
        label="Polityka prywatności"
        to="/polityka-prywatnosci"
      />
      <ComponentsNavigationItem
        data-test="blocks-navigation-footer-privacy-modal"
        label="Ustawienia prywatności"
        @click="openPrivacyModal"
      />
    </WrappersNavigation>
  </nav>
</template>

<script src="./NavigationFooter.ts" lang="ts"></script>
<style src="./NavigationFooter.css" scoped></style>
