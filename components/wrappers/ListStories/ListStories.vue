<template>
  <div
    class="list-stories"
    data-test="wrappers-list-stories"
  >
    <ComponentsLoading v-if="$fetchState.pending" />
    <slot
      v-else
      v-bind="{ stories }"
    />
  </div>
</template>

<script src="./ListStories.ts" lang="ts"></script>
