<template>
  <transition name="header">
    <header
      v-show="shallShowHeader"
      data-test="block-header"
      class="header"
    >
      <ComponentsButtonHamburger
        class="header__button"
        data-test="blocks-header-button"
        :is-open="isDrawerOpen"
        @toggle="toggleDrawer"
      />
      <NuxtLink
        data-test="blocks-header-logo"
        to="/"
        @click.native="closeDrawer"
      >
        <ComponentsLogo class="header__logo" />
      </NuxtLink>
    </header>
  </transition>
</template>

<script src="./Header.ts" lang="ts"></script>
<style src="./Header.css" scoped></style>
