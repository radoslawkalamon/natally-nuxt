<template>
  <div class="promocja-lgbt">
    <div
      class="lgbt-product-card"
      @click="buyClick"
    >
      <transition-group
        class="lgbt-product-card__image-wrapper"
        name="transition-lgbt-image-wrapper"
        tag="div"
      >
        <template v-for="(image, index) in images">
          <img
            v-if="index === activeImage"
            :key="index"
            class="lgbt-product-card__image"
            v-bind="image"
          >
        </template>
      </transition-group>
      <div class="lgbt-product-card__content-wrapper">
        <div class="lgbt-product-card__ribbon">
          <img
            alt="Produkt w promocji!"
            class="lgbt-product-card__ribbon-icon"
            src="./images/ribbon.svg"
            title="Produkt w promocji!"
          >
        </div>
        <h2
          class="lgbt-product-card__title"
          v-text="labels.productTitle"
        />
        <span
          class="lgbt-product-card__price"
          v-text="labels.productPrice"
        />
        <button
          aria-label="Dodaj do koszyka"
          class="lgbt-product-card__add-to-cart"
          data-test="promocja-lgbt-buy-now-button"
          title="Dodaj do koszyka"
          type="button"
        >
          <img
            class="lgbt-product-card__add-to-cart-icon"
            src="./images/magnifier.svg"
          >
          <span v-text="labels.productBuyButton" />
        </button>
      </div>
      <div
        v-if="startAnimation"
        class="lgbt-reaction-wrapper"
      >
        <template v-for="i in heartCount">
          <img
            :key="i"
            alt="Serce"
            class="lgbt-reaction-wrapper__heart"
            data-test="promocja-lgbt-heart"
            src="./images/heart.svg"
            :style="heartStyles[i]"
            title="Serce"
          >
        </template>
      </div>
    </div>
  </div>
</template>

<script src="./PromocjaLGBT.ts" lang="ts"></script>
<style src="./PromocjaLGBT.css" scoped></style>
