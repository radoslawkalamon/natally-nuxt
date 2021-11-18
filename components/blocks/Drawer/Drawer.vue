<template>
  <transition name="drawer">
    <div
      v-show="shouldOpenDrawer"
      class="drawer"
      data-test="blocks-drawer"
    >
      <BlocksNavigationDrawer
        class="drawer__navigation"
        @navigationItemClick="onNavigationItemClick"
      />
      <ComponentsSocialMedia />
    </div>
  </transition>
</template>

<script src="./Drawer.ts" lang="ts"></script>
<style src="./Drawer.css" scoped></style>
