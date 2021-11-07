<template>
  <div
    class="list-poems"
    data-test="wrappers-list-poems"
  >
    <ComponentsLoading v-if="$fetchState.pending" />
    <slot
      v-else
      v-bind="{ metaPostPoems }"
    />
  </div>
</template>

<script src="./ListPoems.ts" lang="ts"></script>
