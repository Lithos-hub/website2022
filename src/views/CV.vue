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
import { ref } from "vue";

import Options from "../components/Options.vue";
import Goback from "../components/Goback.vue";
import CarrouselCV from "../components/CarrouselCV.vue";

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

const educations = ref([
  {
    title:
      "Higher Technical Certificate in Web App Development with Cloud Computing specialization (CFGS).",
    subtitle: "Centro Superior de Formación Europa Sur (Cesur)",
    date: "2020 - Currently",
    sublist: [
      "Study of computer science and web development from a general point of view.",
      "Stack: Java, MySQL, Apache Tomcat, Linux, PHP, HTML, CSS, JavaScript.",
      "Cloud computing: AWS, Google Cloud Platform, Azure.",
    ],
  },
  {
    title: "Programming / Web development self-taught learning",
    subtitle: "",
    date: "2019 - Currently",
    sublist: [
      "Online courses, videos, documentation...",
      "Development of personal projects (web designs and web apps) using front-end technologies (mainly Vue.js).",
      "Learning Cloud Computing technologies (AWS, Google Firebase).",
    ],
  },
  {
    title:
      "University Degree: History and Science of Music and Music Technology",
    subtitle: "Universidad Autónoma de Madrid (UAM).",
    date: "2016 - 2020",
    sublist: [
      "University rating average of 9.",
      "3 honorary mention.",
      "Final Degree work: Herramientas de composición musical en el siglo XXI basadas en la inteligencia artificial.",
    ],
  },
]);

const experience = ref([
  {
    title: "Front-end Developer (Vue)",
    subtitle: "CGI",
    date: "MAR. 2021 - Currently",
    sublist: [
      "Front-end development with Vue.js + Vuetify.",
      "Integrations and deployments.",
      "Vue (HTML, CSS/SCSS, JavaScript) + Vuetify + Google Cloud.",
      "GitFlow + Bitbucket.",
    ],
  },
  {
    title: "Front-end Developer (Vue)",
    subtitle: "Personal projects",
    date: "OCT. 2020 - Currently",
    sublist: [
      "Front-end development with Vue.",
      "Apps made from scratch and developed on my own.",
      "Technologies: Vue 2, Vue 3, Vite, Pinia, Google Firebase, Webpack + JS Vanilla, APIs, Vuetify, Bootstrap...",
    ],
  },
  {
    title: "Music composer / Producer / Sound designer",
    subtitle: "Centro Superior de Formación Europa Sur (Cesur).",
    date: "2015 - 2020",
    sublist: [
      "Stock music for Songs To Your Eyes and Atomica Music Library (USA).",
      "Soundtracks and sound design for videogames and documentaries (Spain).",
      "Guitarist and composer.",
    ],
  },
  {
    title: "University Internship",
    subtitle: "Centro Superior de Investigación y Promoción de la Música (UAM)",
    date: "SEP. 2017 - DEC. 2018",
    sublist: [
      "Music research.",
      "Documentation, layouts and archive management.",
      "Music bands management.",
    ],
  },
]);

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
