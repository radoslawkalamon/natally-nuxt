<template>
  <div
    class="list-poems"
    data-test="wrappers-list-poems"
  >
    <slot v-bind="{ metaPostPoems }" />
  </div>
</template>

<script src="./ListPoems.ts" lang="ts"></script>
