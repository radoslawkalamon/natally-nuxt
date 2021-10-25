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
        :checked="checked"
        class="switch__checkbox"
        data-test="components-switch-input"
        :disabled="disabled"
        type="checkbox"
        :name="name"
        @click.prevent="onClick"
      >
      <span
        class="switch__label"
        v-text="label"
      />
    </label>
    <WrappersText class="switch__description">
      <slot />
    </WrappersText>
  </div>
</template>

<script src="./Switch.ts" lang="ts"></script>
<style src="./Switch.css" scoped></style>
