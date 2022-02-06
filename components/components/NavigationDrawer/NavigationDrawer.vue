<template>
  <nav>
    <WrappersNavigation>
      <template v-for="item in list">
        <ComponentsLink
          :key="item.to"
          data-test="navigation-item"
          v-bind="item"
          @click.native="onNavigationItemClick"
        />
      </template>
    </WrappersNavigation>
  </nav>
</template>

<script src="./NavigationDrawer.ts" lang="ts"></script>
