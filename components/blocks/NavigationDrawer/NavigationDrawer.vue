<template>
  <WrappersNavigation
    v-once
    data-test="blocks-navigation-drawer"
  >
    <template v-for="item in list">
      <ComponentsNavigationItemLink
        :key="item.to"
        v-bind="item"
      />
    </template>
  </WrappersNavigation>
</template>

<script src="./NavigationDrawer.ts" lang="ts"></script>
