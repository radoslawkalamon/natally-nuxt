<template>
  <transition name="fade">
    <article class="modal">
      <div class="modal__frame">
        <ComponentsTitle
          class="modal__title"
          :type="1"
          :design="2"
          :title="title"
        />
        <div class="modal__canvas">
          <slot />
        </div>
      </div>
    </article>
  </transition>
</template>

<script src="./Modal.ts" lang="ts"></script>
<style src="./Modal.css" scoped></style>
