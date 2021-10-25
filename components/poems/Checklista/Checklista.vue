<template>
  <div
    class="checklista"
    data-test="poems-checklista"
  >
    <ComponentsCheckbox
      checked="checked"
      class="checklista__checkbox"
      label="Byle by być"
      name="byle-by-byc"
    />
    <ComponentsCheckbox
      class="checklista__checkbox"
      label="Byle by zaliczyć"
      name="byle-by-zaliczyc"
    />
    <ComponentsCheckbox
      class="checklista__checkbox"
      label="Punkt po punkcie"
      name="punkt-po-punkcie"
    />
    <ComponentsCheckbox
      class="checklista__checkbox"
      label="Życie"
      name="zycie"
    />
    <p class="checklista__last-line">
      <span class="checklista__gradient">Życie w niebycie</span>
    </p>
  </div>
</template>

<script src="./Checklista.ts" lang="ts"></script>
<style src="./Checklista.css" scoped></style>
