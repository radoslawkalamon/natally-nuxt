<template>
  <div class="layout-default">
    <BlocksHeader />

    <LazyHydrate when-idle>
      <BlocksDrawer />
    </LazyHydrate>

    <WrappersMain class="layout-default__main">
      <Nuxt class="layout-default__article" />
    </WrappersMain>

    <LazyHydrate when-visible>
      <BlocksFooter />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <BlocksModalPrivacy />
    </LazyHydrate>
  </div>
</template>

<script src="./default.ts" lang="ts"></script>
<style src="./default.css" scoped></style>
