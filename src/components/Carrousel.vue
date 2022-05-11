<template>
  <section class="carrousel__wrapper">
    <article
      class="card reflections"
      v-for="item in list"
      @click="goTo(item.link)"
    >
      <h3>{{ item.name }}</h3>
      <p>{{ item.subtitle }}</p>
      <h5>Tech stack</h5>
      <hr />
      <section class="tech__stack--wrapper">
        <div v-for="tech in item.tech_icons">
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
  let carrousel = document.querySelector(".carrousel__wrapper");
  if (carrousel) {
    carrousel.addEventListener("wheel", function (e) {
      carrousel.scrollLeft += e.deltaY;
    });
  }
};

onMounted(() => listenScrollX());
</script>

<style lang="scss" scoped>
@import "../scss/app.scss";
@import "../scss/variables.scss";

.carrousel__wrapper {
  display: flex;
  background: transparent;
  width: 100%;
  max-width: 90vw;
  height: 80vh;
  position: fixed;
  top: 60vh;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  overflow-x: scroll;
  border-radius: 25px 25px 0px 0px;
  gap: 1em;
}

.card {
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  // cursor: pointer;
  position: relative;
  border-top: 2px solid white;
  border-bottom: 2px solid cyan;
  border-inline: 2px solid transparent;
  color: $mainDark;
  min-width: 280px;
  height: auto;
  margin-bottom: 1em;
  border-radius: 25px;
  padding: 25px;
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);

  &:hover {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    border-radius: 20px;
    border-inline: 2px solid cyan;
    border-block: 2px solid white;

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
    background: linear-gradient(120deg, #b700ff, #00c8ff);
    filter: brightness(2);
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
    height: 2px;
    border: none;
    background: linear-gradient(120deg, #b700ff, #00c8ff);
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
    background: linear-gradient(120deg, #b700ff, #00c8ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .tech__icon {
    margin: 0 auto;
    background: linear-gradient(120deg, #b700ff, #00c8ff);
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
</style>
