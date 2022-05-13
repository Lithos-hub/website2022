<template>
  <section class="carrousel__wrapper">
    <article class="cv__card reflections" v-for="element in list">
      <header class="cv__card--header">
        <h3>{{ element.title }}</h3>
        <h4>{{ element.subtitle }}</h4>
        <h5>{{ element.date }}</h5>
        <hr />
      </header>
      <ul>
        <li v-for="item in element.sublist">
          <div>
            <mdicon name="check" size="20" />
          </div>
          <div>
            <p>
              {{ item }}
            </p>
          </div>
        </li>
      </ul>
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

const listenScrollX = () => {
  let carrousel = document.querySelectorAll(".carrousel__wrapper");
  carrousel.forEach(carr => carr.addEventListener("wheel", function (e) {
    carr.scrollLeft += e.deltaY;
  }));
};

onMounted(() => {
  listenScrollX();
});
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
@import "../scss/app.scss";

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

article {
  position: relative;
  padding-block: 50px;
  height: auto;
  width: 100%;
  margin-inline: 0;
  margin-bottom: 0;
  width: 100%;
  border-radius: 0;
}
h5 {
  position: relative;
  top: 0%;
  left: 0%;
  width: 100%;
  transform: none;
  letter-spacing: 5px;
  text-transform: uppercase;
}
hr {
  position: relative;
  top: 40%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
}
h3 {
  width: 95%;
  background: $gradientPrimary;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
h4 {
  color: cyan;
  font-size: 12px;
  font-weight: lighter;
}
h5 {
  color: white;
}

ul {
  position: relative;
  bottom: 0;
  left: 0;
  height: auto;
  list-style: none;
  padding: 0;
  padding-bottom: 2em;
  margin: 0 auto;

  li {
    padding-inline: 10px;
    display: flex;
    background: $gradientSecondary;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: left;

    div:first-child {
      color: white;
      margin-block: auto;
      margin-right: 10px;
    }
  }
}
}
@media screen and (min-width: 768px) {
  .carrousel__wrapper {
  display: flex;
  background: transparent;
  width: 100%;
  max-width: 90vw;
  height: auto;
  position: fixed;
  top: 60vh;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  overflow-x: scroll;
  border-radius: 25px 25px 0px 0px;
  gap: 1em;
}

article {
  position: relative;
  padding: 25px;
  height: 500px;
  min-width: 350px;
  width: auto;
  margin-inline: 2em;
  margin-bottom: 1em;
  width: 100%;
  border-radius: 25px;
}
h5 {
  position: absolute;
  top: 30%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  letter-spacing: 5px;
  text-transform: uppercase;
}
hr {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
}
h3 {
  background: $gradientPrimary;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
h4 {
  color: cyan;
  font-size: 12px;
  font-weight: lighter;
}
h5 {
  color: white;
}

ul {
  position: absolute;
  bottom: 0;
  left: 0;
  height: auto;
  list-style: none;
  padding: 0;
  padding-bottom: 2em;
  margin: 0 auto;

  li {
    padding-inline: 10px;
    display: flex;
    background: $gradientSecondary;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: left;

    div:first-child {
      color: white;
      margin-block: auto;
      margin-right: 10px;
    }
  }
}
}
</style>
