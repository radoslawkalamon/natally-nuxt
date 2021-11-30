<template>
  <div class="horoskop">
    <transition
      name="poem-horoskop"
      mode="out-in"
    >
      <div
        v-if="activeState === 1"
        key="slide-1"
        class="horoskop__slide horoskop__slide--1"
      >
        <h2>Sztuczna inteligencja przepowie twoją przyszłość!</h2>
        <h3>Wybierz swój znak zodiaku:</h3>
        <div class="horoskop__zodiacs-list">
          <button
            v-for="zodiac in zodiacs"
            :key="zodiac"
            class="horoskop__button"
            data-test="horoskop-zodiac-button"
            type="button"
            @click="onZodiacClick"
            v-text="zodiac"
          />
        </div>
      </div>
      <div
        v-if="activeState === 2"
        key="slide-2"
        class="horoskop__slide horoskop__slide--2"
      >
        <h3>Proszę czekać...</h3>
        <div class="horoskop__loading-bar-wrapper">
          <div class="horoskop__loading-bar">
            <span
              v-for="spell in spells"
              :key="spell"
              class="horoskop__loading-bar-item"
              v-text="spell"
            />
          </div>
        </div>
      </div>
      <div
        v-if="activeState === 3"
        key="slide-3"
        class="horoskop__slide horoskop__slide--3"
      >
        <h2>Twój horoskop<br>na dziś:</h2>
        <h1
          class="horoskop__horoscope"
          :style="getOpacity(showHoroscope)"
        >
          BĘDZIE<br>DOBRZE!
        </h1>
        <button
          class="horoskop__button horoskop__button--small"
          data-test="horoskop-reset-button"
          type="button"
          :style="getOpacity(showReset)"
          @click="onResetClick"
        >
          Jeszcze raz!
        </button>
      </div>
    </transition>
  </div>
</template>

<script src="./Horoskop.ts" lang="ts"></script>
<style src="./Horoskop.css" scoped></style>
