<template>
  <div
    class="checklista"
    data-test="poems-checklista"
  >
    <label
      v-for="[label, name, checked] in checkboxes"
      :key="name"
      class="checklista__checkbox"
      :for="name"
    >
      <input
        :id="name"
        class="checklista__input"
        type="checkbox"
        :name="name"
        :checked="checked"
      >
      <span
        class="checklista__label"
        v-text="label"
      />
    </label>
    <p class="checklista__last-line">
      <span class="checklista__gradient">Życie w niebycie</span>
    </p>
  </div>
</template>

<script src="./Checklista.ts" lang="ts"></script>
<style src="./Checklista.css" scoped></style>
