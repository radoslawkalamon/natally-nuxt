<template>
  <div
    class="list-stories"
    data-test="wrappers-list-stories"
  >
    <slot v-bind="{ metaPostStories }" />
  </div>
</template>

<script src="./ListStories.ts" lang="ts"></script>
