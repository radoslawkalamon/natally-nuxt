<template>
  <nav
    v-once
    data-test="blocks-navigation-drawer"
  >
    <WrappersNavigation>
      <template v-for="item in list">
        <ComponentsNavigationItemLink
          :key="item.to"
          v-bind="item"
          @click.native="onNavigationItemClick"
        />
      </template>
    </WrappersNavigation>
  </nav>
</template>

<script src="./NavigationDrawer.ts" lang="ts"></script>
