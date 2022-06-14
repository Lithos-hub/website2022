const getImageUrl = (type, name) =>
  new URL(`../assets/img/${type}/${name}`, import.meta.url).href;

export const myDesigns = [
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
];
