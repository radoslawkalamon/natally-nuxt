<template>
  <ul
    v-if="children.length !== 0"
    class="navigation"
  >
    <template v-for="(child, index) in children">
      <li
        :key="index"
        class="navigation__item"
      >
        <vnode :node="child" />
      </li>
    </template>
  </ul>
</template>

<script src="./Navigation.ts" lang="ts"></script>
<style src="./Navigation.css" scoped></style>
