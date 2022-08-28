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
      @action="toggleCarrousel"
    />

    <CarrouselPortfolio v-show="showCarrousel" :list="listToRender" />
  </div>
</template>

<script setup>
// UTILS
import { ref } from "vue";
import { myApps } from "../utils/portfolio_apps";
import { myDesigns } from "../utils/portfolio_designs";

// COMPONENTS
import Goback from "../components/Goback.vue";
import Options from "../components/Options.vue";
import CarrouselPortfolio from "../components/CarrouselPortfolio.vue";

// REFS
const showCarrousel = ref(false);
const listToRender = ref([]);
const selectedOption = ref("");
const isOnTheTop = ref(false);
const optionsList = ref([
  {
    text: "Web apps",
    active: selectedOption.value === "apps",
    emit: "apps",
  },
  {
    text: "Web designs",
    active: selectedOption.value === "designs",
    emit: "designs",
  },
]);

const toggleCarrousel = (type) => {
  selectedOption.value = type;
  const options = {
    apps: () => (listToRender.value = myApps),
    designs: () => (listToRender.value = myDesigns),
  };
  options[type]();

  showCarrousel.value = true;
  isOnTheTop.value = true;
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
