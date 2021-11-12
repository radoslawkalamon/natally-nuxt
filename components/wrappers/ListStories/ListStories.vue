<template>
  <div
    class="list-stories"
    data-test="wrappers-list-stories"
  >
    <slot
      v-if="$fetchState.pending || $fetchState.error"
      name="loader"
    />
    <slot
      v-else
      v-bind="{ metaPostStories }"
    />
  </div>
</template>

<script src="./ListStories.ts" lang="ts"></script>
