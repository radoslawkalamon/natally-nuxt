<template>
  <div class="switch">
    <label
      class="switch__label-wrapper"
      :for="name"
    >
      <input
        :id="name"
        class="switch__checkbox"
        type="checkbox"
        :name="name"
        v-bind="$attrs"
        v-on="$listeners"
      >
      <div class="switch__fake-checkbox" />
      <span
        class="switch__label"
        v-text="label"
      />
    </label>
    <WrappersText
      v-if="$slots.default"
      class="switch__description"
    >
      <slot />
    </WrappersText>
  </div>
</template>

<script src="./Switch.ts" lang="ts"></script>
<style src="./Switch.css" scoped></style>
