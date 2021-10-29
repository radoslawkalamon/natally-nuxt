<template>
  <transition name="drawer">
    <div
      v-show="shallOpenDrawer"
      class="drawer"
      data-test="blocks-drawer"
    >
      <BlocksNavigationDrawer class="drawer__navigation" />
      <BlocksSocialMedia />
    </div>
  </transition>
</template>

<script src="./Drawer.ts" lang="ts"></script>
<style src="./Drawer.css" scoped></style>
