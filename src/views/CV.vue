<template>
  <div class="cv">
    <Goback />
    <h1>CV</h1>
    <Options
      :options="optionsList"
      :class="
        isOnTheTop
          ? 'options__wrapper--top d-flex space-between'
          : 'options__wrapper--center d-flex space-between'
      "
      @action="toggleCarrousel"
    />

    <CarrouselCV
      v-show="showCarrousel"
      :list="listToRender"
      :is-compact="selectedOption === 'courses'"
    />
  </div>
</template>

<script setup>
// UTILS
import { ref } from "vue";
import { myEducations } from "../utils/cv_educations";
import { myExperiences } from "../utils/cv_experiences";
import { myCourses } from "../utils/cv_courses";

// COMPONENTS
import Options from "../components/Options.vue";
import Goback from "../components/Goback.vue";
import CarrouselCV from "../components/CarrouselCV.vue";

// REFS
const showCarrousel = ref(false);
const listToRender = ref([]);
const selectedOption = ref("");
const isOnTheTop = ref(false);
const optionsList = ref([
  {
    text: "Education",
    active: selectedOption.value === "education",
    emit: "education",
  },
  {
    text: "Additional courses",
    active: selectedOption.value === "courses",
    emit: "courses",
  },
  {
    text: "Experience",
    active: selectedOption.value === "experience",
    emit: "experience",
  },
]);

// METHODS
const toggleCarrousel = (type) => {
  selectedOption.value = type;
  const options = {
    education: () => (listToRender.value = myEducations),
    courses: () => (listToRender.value = myCourses),
    experience: () => (listToRender.value = myExperiences),
  };
  options[type]();

  showCarrousel.value = true;
  isOnTheTop.value = true;
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
@import "../scss/app.scss";

@media screen and (max-width: 768px) {
  .cv {
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
  .cv {
    h1 {
      position: fixed;
      top: 5vh;
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
