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
import { ref } from "vue";

import Goback from "../components/Goback.vue";
import Options from "../components/Options.vue";
import CarrouselPortfolio from "../components/CarrouselPortfolio.vue";

const showingDesigns = ref(false);
const showingApps = ref(false);
const isOnTheTop = ref(false);
const getImageUrl = (type, name) =>
  new URL(`../assets/img/${type}/${name}`, import.meta.url).href;

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

const designs = ref([
  {
    isNew: false,
    name: "Blog",
    subtitle: "A simple misellaneous blog design",
    link: "https://blog-mainsite.netlify.app",
    img: getImageUrl("designs", "blog-design.jpg"),
    tech_icons: [
      { techname: "Vue 2", techicon: "vuejs" },
      { techname: "HTML", techicon: "language-html5" },
      { techname: "CSS", techicon: "language-css3" },
      { techname: "SCSS", techicon: "sass" },
      { techname: "JS", techicon: "language-javascript" },
      { techname: "Vuetify", techicon: "vuetify" },
    ],
  },
  {
    isNew: false,
    name: "IT Company",
    subtitle: "Technology company main website",
    link: "https://it-company-mainsite.netlify.app/",
    img: getImageUrl("designs", "kraken-design.jpg"),
    tech_icons: [
      { techname: "Vue 2", techicon: "vuejs" },
      { techname: "HTML", techicon: "language-html5" },
      { techname: "CSS", techicon: "language-css3" },
      { techname: "SCSS", techicon: "sass" },
      { techname: "JS", techicon: "language-javascript" },
      { techname: "Vuetify", techicon: "vuetify" },
    ],
  },
  {
    isNew: false,
    name: "Travel Agency",
    subtitle: "Travel agency main website",
    link: "https://travel-agency-mainsite.netlify.app/",
    img: getImageUrl("designs", "travel-design.jpg"),
    tech_icons: [
      { techname: "Vue 2", techicon: "vuejs" },
      { techname: "HTML", techicon: "language-html5" },
      { techname: "CSS", techicon: "language-css3" },
      { techname: "SCSS", techicon: "sass" },
      { techname: "JS", techicon: "language-javascript" },
      { techname: "Vuetify", techicon: "vuetify" },
    ],
  },
  {
    isNew: false,
    name: "Product",
    subtitle: "Smartphone model main website",
    link: "https://product-mainsite.netlify.app/",
    img: getImageUrl("designs", "smartphone-design.jpg"),
    tech_icons: [
      { techname: "Vue 2", techicon: "vuejs" },
      { techname: "HTML", techicon: "language-html5" },
      { techname: "CSS", techicon: "language-css3" },
      { techname: "SCSS", techicon: "sass" },
      { techname: "JS", techicon: "language-javascript" },
      { techname: "Vuetify", techicon: "vuetify" },
    ],
  },
  {
    isNew: false,
    name: "NGO",
    subtitle: "NGO main website",
    link: "https://ngo-mainsite.netlify.app/",
    img: getImageUrl("designs", "ngo-design.jpg"),
    tech_icons: [
      { techname: "Vue 2", techicon: "vuejs" },
      { techname: "HTML", techicon: "language-html5" },
      { techname: "CSS", techicon: "language-css3" },
      { techname: "SCSS", techicon: "sass" },
      { techname: "JS", techicon: "language-javascript" },
      { techname: "Vuetify", techicon: "vuetify" },
    ],
  },
]);

const apps = ref([
  {
    isNew: true,
    name: "iCode",
    tech_icons: [
      { techname: "Vue 3", techicon: "vuejs" },
      { techname: "HTML", techicon: "language-html5" },
      { techname: "CSS", techicon: "language-css3" },
      { techname: "SCSS", techicon: "sass" },
      { techname: "JS", techicon: "language-javascript" },
    ],
    subtitle: "HTML, CSS and JavaScript code playground",
    link: "https://icode-playground-app.netlify.app/",
    img: getImageUrl("apps", "iCode.jpg"),
  },
  {
    isNew: true,
    name: "iShop",
    tech_icons: [
      { techname: "Vue 3", techicon: "vuejs" },
      { techname: "HTML", techicon: "language-html5" },
      { techname: "CSS", techicon: "language-css3" },
      { techname: "SCSS", techicon: "sass" },
      { techname: "JS", techicon: "language-javascript" },
      { techname: "Firebase", techicon: "firebase" },
    ],
    subtitle: "Fake e-commerce app",
    link: "https://ishop-app.netlify.app/",
    img: getImageUrl("apps", "iShop.jpg"),
  },
  {
    isNew: false,
    name: "iCompose",
    tech_icons: [
      { techname: "Vue 3", techicon: "vuejs" },
      { techname: "HTML", techicon: "language-html5" },
      { techname: "CSS", techicon: "language-css3" },
      { techname: "SCSS", techicon: "sass" },
      { techname: "JS", techicon: "language-javascript" },
    ],
    subtitle: "Reusable web components made from scratch",
    link: "https://icompose.netlify.app/",
    img: getImageUrl("apps", "iCompose.jpg"),
  },
  {
    isNew: false,
    name: "iMovies",
    tech_icons: [
      { techname: "Vue 2", techicon: "vuejs" },
      { techname: "API", techicon: "api" },
      { techname: "HTML", techicon: "language-html5" },
      { techname: "CSS", techicon: "language-css3" },
      { techname: "SCSS", techicon: "sass" },
      { techname: "JS", techicon: "language-javascript" },
      { techname: "Vuetify", techicon: "vuetify" },
      { techname: "Firebase", techicon: "firebase" },
    ],
    subtitle: "App about movies powered with the Movie Database API",
    link: "https://imovies-app.netlify.app/",
    img: getImageUrl("apps", "imovies-logo.jpg"),
  },
  {
    isNew: false,
    name: "iVitae",
    tech_icons: [
      { techname: "Vue 2", techicon: "vuejs" },
      { techname: "HTML", techicon: "language-html5" },
      { techname: "CSS", techicon: "language-css3" },
      { techname: "SCSS", techicon: "sass" },
      { techname: "JS", techicon: "language-javascript" },
      { techname: "Vuetify", techicon: "vuetify" },
    ],
    subtitle: "Create your CV or Cover Letter and download it in PDF",
    link: "https://ivitae.netlify.app/",
    img: getImageUrl("apps", "ivitae-logo.jpg"),
  },
  {
    isNew: false,
    name: "iRead",
    tech_icons: [
      { techname: "Vue 2", techicon: "vuejs" },
      { techname: "API", techicon: "api" },
      { techname: "HTML", techicon: "language-html5" },
      { techname: "CSS", techicon: "language-css3" },
      { techname: "SCSS", techicon: "sass" },
      { techname: "JS", techicon: "language-javascript" },
      { techname: "Vuetify", techicon: "vuetify" },
      { techname: "LocalStorage", techicon: "database" },
    ],
    subtitle:
      "App about books powered with Google Books and The New York Times APIs",
    link: "https://iread-app.netlify.app/",
    img: getImageUrl("apps", "iread-logo.jpg"),
  },
  {
    isNew: false,
    name: "iDash",
    tech_icons: [
      { techname: "Vue 2", techicon: "vuejs" },
      { techname: "API", techicon: "api" },
      { techname: "HTML", techicon: "language-html5" },
      { techname: "CSS", techicon: "language-css3" },
      { techname: "SCSS", techicon: "sass" },
      { techname: "JS", techicon: "language-javascript" },
      { techname: "Vuetify", techicon: "vuetify" },
      { techname: "Firebase", techicon: "firebase" },
    ],
    subtitle: "Dashboard app for business",
    link: "https://idash.netlify.app/",
    img: getImageUrl("apps", "idash-logo.jpg"),
  },
  {
    isNew: false,
    name: "Matrix Raining Code Generator",
    tech_icons: [
      { techname: "Vue 2", techicon: "vuejs" },
      { techname: "HTML", techicon: "language-html5" },
      { techname: "CSS", techicon: "language-css3" },
      { techname: "SCSS", techicon: "sass" },
      { techname: "JS", techicon: "language-javascript" },
    ],
    subtitle: "A Matrix Raining Code Simulator",
    link: "https://matrixrainingcode.netlify.app/",
    img: getImageUrl("apps", "matrix.jpg"),
  },
  {
    isNew: false,
    name: "PokéAPP",
    tech_icons: [
      { techname: "HTML", techicon: "language-html5" },
      { techname: "CSS", techicon: "language-css3" },
      { techname: "SCSS", techicon: "sass" },
      { techname: "JS", techicon: "language-javascript" },
      { techname: "Webpack", techicon: "webpack" },
    ],
    subtitle: "Search and show info about Pokémon",
    link: "https://pokeapp-app.netlify.app/",
    img: getImageUrl("apps", "pokeapp-logo.jpg"),
  },
]);

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
