<template>
  <div class="portfolio">
    <Goback />
    <h1>Portfolio</h1>

    <Options
      :options="optionsList"
      :class="
        isOnTheTop
          ? 'options__wrapper--top d-flex space-between'
          : 'options__wrapper--center d-flex space-between'
      "
      @action="toggleAction"
    />

    <CarrouselPortfolio v-show="showingDesigns" :list="designs" />
    <CarrouselPortfolio v-show="showingApps" :list="apps" />
  </div>
</template>

<script setup>
// UTILS
import { ref } from "vue";
import { myApps } from '../utils/portfolio_apps';
import { myDesigns } from '../utils/portfolio_designs';

// COMPONENTS
import Goback from "../components/Goback.vue";
import Options from "../components/Options.vue";
import CarrouselPortfolio from "../components/CarrouselPortfolio.vue";

// REFS
const showingDesigns = ref(false);
const showingApps = ref(false);
const isOnTheTop = ref(false);
const optionsList = ref([
  {
    text: "Web designs",
    active: showingDesigns,
    emit: "designs",
  },
  {
    text: "Web apps",
    active: showingApps,
    emit: "apps",
  },
]);
const designs = ref(myDesigns);
const apps = ref(myApps);

// METHODS

const toggleAction = (emit) => {
  if (emit === "designs" && !showingDesigns.value) {
    isOnTheTop.value = true;
    showingDesigns.value = true;
    showingApps.value = false;
  } else if (emit === "designs" && showingDesigns.value) {
    isOnTheTop.value = false;
    showingDesigns.value = false;
    showingApps.value = false;
  }
  if (emit === "apps" && !showingApps.value) {
    isOnTheTop.value = true;
    showingDesigns.value = false;
    showingApps.value = true;
  } else if (emit === "apps" && showingApps.value) {
    isOnTheTop.value = false;
    showingDesigns.value = false;
    showingApps.value = false;
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/app.scss";

@media screen and (max-width: 768px) {
  .portfolio {
    h1 {
      position: fixed;
      top: 0vh;
      right: 2vw;
      font-size: 20px;
      color: rgb(255, 255, 255);
      font-weight: lighter;
      letter-spacing: 10px;
    }
  }
}
@media screen and (min-width: 768px) {
  .portfolio {
    h1 {
      position: fixed;
      top: 2vh;
      left: 50%;
      font-size: 28px;
      transform: translate(-50%, -50%);
      color: rgb(255, 255, 255);
      font-weight: lighter;
      letter-spacing: 10px;
    }
  }
}
</style>
