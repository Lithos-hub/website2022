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
      @action="toggleAction"
    />

    <CarrouselCV v-show="showingEducation" :list="educations" />
    <CarrouselCV v-show="showingExperience" :list="experience" />

  </div>
</template>

<script setup>
// UTILS
import { ref } from "vue";
import { myEducations } from '../utils/cv_educations';
import { myExperiences } from '../utils/cv_experiences';

// COMPONENTS
import Options from "../components/Options.vue";
import Goback from "../components/Goback.vue";
import CarrouselCV from "../components/CarrouselCV.vue";

// REFS
const showingEducation = ref(false);
const showingExperience = ref(false);
const isOnTheTop = ref(false);
const optionsList = ref([
  {
    text: "Education",
    active: showingEducation,
    emit: "education",
  },
  {
    text: "Experience",
    active: showingExperience,
    emit: "experience",
  },
]);

const educations = ref(myEducations);
const experience = ref(myExperiences);

// METHODS
const toggleAction = (emit) => {
  if (emit === "education" && !showingEducation.value) {
    isOnTheTop.value = true;
    showingEducation.value = true;
    showingExperience.value = false;
  } else if (emit === "education" && showingEducation.value) {
    isOnTheTop.value = false;
    showingEducation.value = false;
    showingExperience.value = false;
  }
  if (emit === "experience" && !showingExperience.value) {
    isOnTheTop.value = true;
    showingEducation.value = false;
    showingExperience.value = true;
  } else if (emit === "experience" && showingExperience.value) {
    isOnTheTop.value = false;
    showingEducation.value = false;
    showingExperience.value = false;
  }
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
      top: 10vh;
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
