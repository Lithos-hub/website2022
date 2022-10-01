<template>
  <section class="carrousel__wrapper">
    <article
      class="card reflections"
      v-for="(element, i) in list"
      :key="i"
      @click="goTo(element.link)"
    >
      <h3>{{ element.name }}</h3>
      <p>{{ element.subtitle }}</p>
      <hr />
      <h5>Tech stack</h5>
      <section class="tech__stack--wrapper">
        <div v-for="(tech, i) in element.tech_icons" :key="i">
          <mdicon class="tech__icon" :name="tech.techicon" :size="20"></mdicon>
          <p class="tech__name">{{ tech.techname }}</p>
        </div>
      </section>
      <div class="card__image--wrapper">
        <img class="card__image" :src="element.img" :alt="element.name" />
      </div>
    </article>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

const goTo = (link) => window.open(link, "_blank");

const listenScrollX = () => {
  let carrousel = document.querySelectorAll(".carrousel__wrapper");
  carrousel.forEach((carr) =>
    carr.addEventListener("wheel", function (e) {
      carr.scrollLeft += e.deltaY;
    })
  );
};

onMounted(() => listenScrollX());
</script>

<style lang="scss" scoped>
@import "../scss/app.scss";
@import "../scss/variables.scss";

@media screen and (max-width: 767px) {
  .carrousel__wrapper {
    display: block;
    background: transparent;
    width: 100%;
    max-width: 100vw;
    height: 100%;
    position: relative;
    top: 30vh;
    left: 0;
    transform: none;
    margin: 0;
    overflow-x: scroll;
    border-radius: 0px 0px 0px 0px;
    gap: 1em;
  }
  .card {
    transition: none;
    position: relative;
    border-top: none;
    border-bottom: 1px solid white;
    border-inline: none;
    color: $mainDark;
    min-width: auto;
    height: 100%;
    margin-bottom: 0;
    border-radius: none;
    padding: 50px;
    clip-path: none;

    h3 {
      margin: 0 auto;
      font-weight: lighter;
      color: white;
      width: 80%;
      font-size: 1.5em;
    }

    p {
      margin-block: 2em;
      color: cyan;
      text-align: center;
      position: relative;
      top: 2vh;
    }

    h5 {
      position: relative;
      color: white;
      top: 0;
      text-align: center;
      width: 100%;
      background: $gradientSecondary;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    hr {
      width: 100%;
    }

    .tech__stack--wrapper {
      position: relative;
      top: 2vh;
      left: 0;
      transform: none;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
      gap: 80px;

      div {
        margin-bottom: 1em;
        margin: 0 auto;
      }
    }
    .tech__name {
      margin: 0 auto;
      font-size: 11px;
      filter: brightness(2);
      font-weight: bold;
      background: $gradientTertiary;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .tech__icon {
      margin: 0 auto;
      background: $gradientTertiary;
      color: white;
      padding: 5px;
      border-radius: 7px;
    }
    .card__image {
      margin-top: 5rem;
      width: 100%;
      border-radius: 20px;
    }
  }
}
@media screen and (min-width: 768px) {
  .carrousel__wrapper {
    display: flex;
    background: transparent;
    width: 100%;
    max-width: 90vw;
    height: clamp(50vh, 80vh, 75vh);
    position: fixed;
    top: 60vh;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    overflow-x: scroll;
    border-radius: 25px 25px 0px 0px;
    gap: 1em;
  }
  .card {
    transition: all 0.2s ease-in;
    position: relative;
    border-top: 2px solid white;
    border-bottom: 2px solid cyan;
    border-inline: 2px solid transparent;
    color: $mainDark;
    min-width: clamp(100px, 500px, 280px);
    width: auto;

    margin-bottom: 25px;
    border-radius: 25px;
    padding: 25px;

    &:hover {
      border-radius: 20px;
      border-inline: 2px solid cyan;
      border-block: 2px solid white;
      filter: drop-shadow(0px 0px 5px rgb(179, 0, 255));

      .card__image {
        filter: brightness(1.5);
      }
    }

    h3 {
      color: white;
    }

    p {
      color: cyan;
      text-align: center;
    }

    h5 {
      margin: 0 auto;
      color: white;
      text-align: center;
      width: 100%;
      background: $gradientSecondary;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .tech__stack--wrapper {
      width: 80%;
      margin: 0 auto;
      margin-top: 3rem;
      height: auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20px, 1fr));
      gap: 40px;

      div {
        margin-bottom: 1em;
        margin: 0 auto;
      }
    }
    .tech__name {
      margin: 0 auto;
      margin-top: 1rem;
      font-size: 11px;
      filter: brightness(2);
      font-weight: bold;
      background: $gradientTertiary;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .tech__icon {
      margin: 0 auto;
      background: $gradientTertiary;
      color: white;
      padding: 5px;
      border-radius: 7px;
    }
    .card__image--wrapper {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
    .card__image {
      transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

      border-radius: 25px;
      margin-top: 50px;
      height: clamp(100px, 200px, 280px);
      width: clamp(100px, 200px, 280px);
    }
  }
}
</style>
