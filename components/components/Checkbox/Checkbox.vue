<template>
  <label
    class="checkbox"
    data-test="components-checkbox"
    :for="name"
  >
    <input
      :id="name"
      class="checkbox__input"
      data-test="components-checkbox-input"
      type="checkbox"
      :name="name"
      v-bind="$attrs"
      v-on="$listeners"
    >
    <span
      class="checkbox__label"
      v-text="label"
    />
  </label>
</template>

<script src="./Checkbox.ts" lang="ts"></script>
<style src="./Checkbox.css" scoped></style>
