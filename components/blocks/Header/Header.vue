<template>
  <header
    :class="headerClasses"
    data-test="blocks-header"
  >
    <ComponentsButtonHamburger
      class="header__button"
      :is-open="shallOpenDrawer"
      @click="onHamburgerToggle"
    />
    <NuxtLink :to="homepageURL">
      <ComponentsLogo class="header__logo" />
    </NuxtLink>
  </header>
</template>

<script src="./Header.ts" lang="ts"></script>
<style src="./Header.css" scoped></style>
