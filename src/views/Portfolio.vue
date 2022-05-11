<template>
  <div class="portfolio">
    <Goback />
    <h1>Portfolio</h1>

    <section
      :class="
        showingDesigns || showingApps
          ? 'options__wrapper--top d-flex space-between'
          : 'options__wrapper--center d-flex space-between'
      "
    >
      <button
        :class="showingDesigns ? 'mainButton active--btn' : 'mainButton'"
        @click="showDesigns"
      >
        Web designs
      </button>
      <button
        :class="showingApps ? 'mainButton active--btn' : 'mainButton'"
        @click="showApps"
      >
        Web apps
      </button>
    </section>

    <Carrousel :list="designs" v-if="showingDesigns" />
    <Carrousel :list="apps" v-if="showingApps" />
  </div>
</template>

<script setup>
import Goback from "../components/Goback.vue";

import { ref } from "vue";
import Carrousel from "../components/Carrousel.vue";

const showingDesigns = ref(false);
const showingApps = ref(false);

const getImageUrl = (type, name) => {
  return new URL(`../assets/img/${type}/${name}`, import.meta.url).href;
};

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

const showDesigns = () => {
  showingDesigns.value = true;
  showingApps.value = false;
};
const showApps = () => {
  showingDesigns.value = false;
  showingApps.value = true;
};
</script>

<style lang="scss" scoped>
@import "../scss/app.scss";

.portfolio {
  h1 {
    position: fixed;
    top: 3vh;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(255, 255, 255);
    font-weight: lighter;
    letter-spacing: 10px;
  }

  .options__wrapper--top {
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    position: fixed;
    top: 13vh;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    filter: drop-shadow(0px 0px 10px #6bc0c8);

    button {
      margin-inline: 5vw;
    }
  }
  .options__wrapper--center {
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    filter: drop-shadow(0px 0px 10px #6bc0c8);

    button {
      margin-inline: 5vw;
    }
  }

  .mainButton {
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    border-top: 1px solid white;
    border-bottom: 1px solid cyan;
    border-inline: none;
    background: transparent;
    padding: 25px;
    border-radius: 25px;
    width: 250px;
    font-size: 1.2em;
    color: white;
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);

    &:hover {
      background: $mainDark;
    }

    &:active {
      background: white;
    }
  }

  .active--btn {
    background: white;
    color: $mainDark;
  }
}
</style>
