<template>
  <footer
    v-once
    class="footer"
    data-test="blocks-footer"
  >
    <ComponentsNavigationFooter />
    <a
      :href="crustyBreadTechWebsite"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ComponentsLogoCrustyBread />
    </a>
    <WrappersText>
      <p>
        {{ websiteName }} &copy; {{ fullYear }}
      </p>
    </WrappersText>
  </footer>
</template>

<script src="./Footer.ts" lang="ts"></script>
<style src="./Footer.css" scoped></style>
