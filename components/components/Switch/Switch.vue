<template>
  <div
    class="switch"
    data-test="components-switch"
  >
    <label
      class="switch__label-wrapper"
      :for="name"
    >
      <input
        :id="name"
        class="switch__checkbox"
        data-test="components-switch-input"
        type="checkbox"
        :name="name"
        v-bind="$attrs"
        v-on="$listeners"
      >
      <span
        class="switch__label"
        v-text="label"
      />
    </label>
    <WrappersText
      v-if="$slots.default"
      class="switch__description"
      data-test="components-switch-description"
    >
      <slot />
    </WrappersText>
  </div>
</template>

<script src="./Switch.ts" lang="ts"></script>
<style src="./Switch.css" scoped></style>
