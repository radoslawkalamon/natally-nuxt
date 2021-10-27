<template>
  <footer
    v-once
    class="footer"
    data-test="blocks-footer"
  >
    <BlocksNavigationFooter />
    <a
      :href="crustyBreadTechWebsite"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ComponentsLogoCrustyBread />
    </a>
    <WrappersText>
      <p>
        {{ getWebsiteName }} &copy; {{ getFullYear }}
      </p>
    </WrappersText>
  </footer>
</template>

<script src="./Footer.ts" lang="ts"></script>
<style src="./Footer.css" scoped></style>
