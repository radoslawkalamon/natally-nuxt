<template>
  <transition name="header">
    <header
      v-show="shallShowHeader"
      class="header"
      data-test="blocks-header"
    >
      <ComponentsButtonHamburger
        class="header__button"
        data-test="blocks-header-button"
        :is-open="isDrawerOpen"
        @toggle="toggleDrawer"
      />
      <NuxtLink
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
