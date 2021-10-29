<template>
  <div class="layout-default">
    <BlocksHeader />
    <BlocksDrawer />
    <WrappersMain class="layout-default__main">
      <Nuxt />
    </WrappersMain>
    <BlocksFooter />
    <BlocksModalPrivacy />
  </div>
</template>

<script src="./default.ts" lang="ts"></script>
<style src="./default.css" scoped></style>
