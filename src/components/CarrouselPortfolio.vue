<template>
  <section class="carrousel__wrapper">
    <article
      class="card reflections"
      v-for="(item, i) in list"
      :key="i"
      @click="goTo(item.link)"
    >
      <h3>{{ item.name }}</h3>
      <p>{{ item.subtitle }}</p>
      <h5>Tech stack</h5>
      <hr />
      <section class="tech__stack--wrapper">
        <div v-for="(tech, i) in item.tech_icons" :key="i">
          <mdicon class="tech__icon" :name="tech.techicon" :size="30"></mdicon>
          <p class="tech__name">{{ tech.techname }}</p>
        </div>
      </section>
      <img class="card__image" :src="item.img" :alt="item.name" />
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

const { list } = props;

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
      position: absolute;
      top: 3vh;
      right: 80%;
      transform: translate(100%, -50%);
      font-weight: lighter;
      color: white;
      width: 80%;
      font-size: 1.5em;
    }

    p {
      margin-top: 5em;
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
      position: relative;
      top: 0;
      left: 0;
      transform: none;
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
      grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
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
      padding: 10px;
      border-radius: 10px;
    }
    .card__image {
      position: absolute;
      top: 10%;
      left: 15%;
      transform: translate(-50%, -50%);
      width: 100px;
      height: auto;
      border-radius: none;
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
    min-width: clamp(100px, 350px, 280px);
    width: auto;
    height: auto;
    margin-bottom: 25px;
    border-radius: 25px;
    padding: 25px;

    &:hover {
      border-radius: 20px;
      border-inline: 2px solid cyan;
      border-block: 2px solid white;
      filter: drop-shadow(0px 0px 5px rgb(179, 0, 255));

      .card__image {
        border-radius: 0px 0px 25px 25px;
      }
    }

    h3 {
      color: white;
    }

    p {
      color: cyan;
      text-align: center;
      position: relative;
      top: 2vh;
    }

    h5 {
      position: absolute;
      color: white;
      top: 18vh;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 100%;
      background: $gradientSecondary;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    hr {
      position: absolute;
      top: 21vh;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }

    .tech__stack--wrapper {
      position: absolute;
      top: 31vh;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
      gap: 40px;

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
      padding: 10px;
      border-radius: 10px;
    }
    .card__image {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: auto;
      border-radius: 0px 0px 25px 25px;
    }
  }
}
</style>
