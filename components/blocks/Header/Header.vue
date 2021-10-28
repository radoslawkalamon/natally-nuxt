<template>
  <transition name="header">
    <header
      v-show="shallShowHeader"
      class="header"
      data-test="blocks-header"
    >
      <ComponentsButtonHamburger
        class="header__button"
        :is-open="isDrawerOpen"
        @toggle="onToggle"
      />
      <NuxtLink :to="homepageURL">
        <ComponentsLogo class="header__logo" />
      </NuxtLink>
    </header>
  </transition>
</template>

<script src="./Header.ts" lang="ts"></script>
<style src="./Header.css" scoped></style>
