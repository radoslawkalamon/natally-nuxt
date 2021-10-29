<template>
  <transition name="drawer">
    <div
      v-show="shallShowDrawer"
      class="drawer"
      data-test="blocks-drawer"
    >
      <div class="drawer__logo-placeholder" />
      <BlocksNavigationDrawer />
      <BlocksSocialMedia />
    </div>
  </transition>
</template>

<script src="./Drawer.ts" lang="ts"></script>
<style src="./Drawer.css" scoped></style>
