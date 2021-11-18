<template>
  <nav
    v-once
    data-test="components-navigation-drawer"
  >
    <WrappersNavigation>
      <template v-for="item in list">
        <ComponentsLinkText
          :key="item.to"
          v-bind="item"
          @click.native="onNavigationItemClick"
        />
      </template>
    </WrappersNavigation>
  </nav>
</template>

<script src="./NavigationDrawer.ts" lang="ts"></script>
