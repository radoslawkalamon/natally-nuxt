<template>
  <div
    class="list-poems"
    data-test="wrappers-list-poems"
  >
    <slot
      v-if="$fetchState.pending || $fetchState.error"
      name="loader"
    />
    <slot
      v-else
      v-bind="{ metaPostPoems }"
    />
  </div>
</template>

<script src="./ListPoems.ts" lang="ts"></script>
